const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    workplace: String,
    gender: String,
    specialty: String,
    dob: String,
    age: String
})

const DoctorModel = mongoose.model("Doctors", DoctorSchema)
module.exports= DoctorModel