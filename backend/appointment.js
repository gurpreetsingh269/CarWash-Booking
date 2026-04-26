const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    service: String,
    date: Date,
    time: String,
    email:String
});

module.exports = mongoose.model("Appointment", appointmentSchema);