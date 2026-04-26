const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/carwash")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to mongoDB:", err);
  });
const appointmentRoute = require("./public/Appointment");
app.use("/api/appointments", appointmentRoute);
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
});
