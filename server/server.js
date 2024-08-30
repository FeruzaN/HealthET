const express= require('express');
const mongoose = require('mongoose')
const cors = require("cors")
const DoctorModel = require('./Model/Doc_Model');

const app= express();
app.use(express.json())
app.use(cors())

require('dotenv').config();
mongoose.connect("mongodb://localhost:27017//Doctor", console.log(`database connected to`));

app.post("/login_d", (req, res) => {
  const {email, password} = req.body;
  EmployeeModel.findOne({email: email})
  .then(user =>  {
      if(user){
      if(user.password === password){
          res.json("Success")
      } else {
          res.json("the password is incorrect")
      }
  } else{
      res.json("No record existed")
  }
  })
})

const port = process.env.PORT || 4000;
app.post('/doctor', (req, res) => {
  const newDoctor = new DoctorModel(req.body);  // Create a new instance of DoctorModel with the request body data
  console.log(newDoctor)

  newDoctor.save()  // Save the new doctor instance to the database
    .then(doctor => res.json(doctor))  // If successful, return the saved doctor as a JSON response
    .catch(err => res.json(err));  // If an error occurs, return the error as a JSON response
});
app.get('/', (req, res) => {
    res.send('Hello, from server test');
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  