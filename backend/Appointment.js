const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const Appointment = require('../models/appointment')

router.post("/", async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "gurpreet0510.be23@chitkara.edu.in",
                pass: ""
            }
        });

        //EMAIL TO ADMIN
        const adminMail = {
            from: "gurpreet0510.be23@chitkara.edu.in",
            to: "gurpreet0510.be23@chitkara.edu.in",
            subject: "New Car Wash Booking",
            text:
                `
New Booking Recieved:

Name:${req.body.name}
Phone: ${req.body.phone}
Service: ${req.body.service}
Date: ${req.body.date}
`
        };

        //EMAIL TO CUSTOMER


        const userMail = {
            from: "gurpreet0510.be23@chitkara.edu.in",
            to: req.body.email,
            subject: "Booking Confirmed",
            text:
                `
Hello ${req.body.name},

Your car wash booking is confirmed

Details:
Service: ${req.body.service}
Date: ${req.body.date}

Thank you for choosing us!
`
        };

        await transporter.sendMail(adminMail)
        await transporter.sendMail(userMail)
        res.json({ message: "Booking successful" });
    } catch (err) {

        res.status(500).json({ error: err.message });
     }
});
module.exports = router;