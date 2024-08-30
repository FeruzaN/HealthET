import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios'  
import { useNavigate }  from 'react-router-dom';
import Login_d from './Login_d';
function Doctor() {
  const[name, setName]= useState()
  const[email, setEmail]= useState()
  const[password, setPassword]= useState()
  const[workplace, setWorkplace] = useState()
  const[specialty, setSpecialty] = useState()
  const[age, setAge] = useState()
  const[dob, setDob] = useState()
  const [gender, setGender] = useState()
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/doctor', {name, email, password, gender, dob, age, specialty , workplace})
    .then(result => {console.log(result)
    navigate('/login_d')
    })
    .catch(err=> console.log(err))
}
  return (
    
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
     <Header />
    <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='name'> <strong>Name</strong></label>
                <input 
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    name="name"
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
            <input 
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className='mb-3'>
                <label htmlFor="email"><strong>Password</strong></label>
            <input 
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    name="password"
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className='mb-3'>
                <label> <strong>Gender</strong></label>
        <div className='ml-20'>
          <label className="mr-3">
         <input type="radio" name="gender" value="female" onChange={(e) => setName(e.target.value)}/> Female
         </label>
         <label>
       <input type="radio" name="gender" value="male" onChange={(e) => setName(e.target.value)}/> Male
        </label>
       </div>
</div>
           <div className='mb-3'>
  <label htmlFor='dob'> <strong>Date of Birth</strong></label>
  <input
    type="date"
    name="dob"
    id="dob"
    className='form-control rounded-0'
    onChange={(e) => setName(e.target.value)}
  />
</div>
<div className='mb-3'>
  <label htmlFor='age'> <strong>Age</strong></label>
  <input
    type="number"
    name="age"
    id="age"
    placeholder="Enter Age"
    className='form-control rounded-0'
    onChange={(e) => setName(e.target.value)}
  />
</div>
<div className='mb-3'>
  <label htmlFor='specialty'> <strong>Specialty</strong></label>
  <select
    name="specialty"
    id="specialty"
    className='form-control rounded-0'
    defaultValue=""
    onChange={(e) => setName(e.target.value)}
  >
    <option value="" disabled>Select Specialty</option>
    <option value="General Practitioner">General Practitioner</option>
    <option value="Psychiatrist">Psychiatrist</option>
    <option value="Nutritionist">Nutritionist</option>
  </select>
</div>
<div className='mb-3'>
  <label htmlFor='workplace'> <strong>Workplace</strong></label>
  <input
    type="text"
    name="workplace"
    id="workplace"
    placeholder="Enter Workplace"
    className='form-control rounded-0'
    onChange={(e) => setName(e.target.value)}
  />
</div>


                <button type="submit" className='btn btn-success w-100 rounded-0'>
                  Register
                </button>
                
                <p>Already Have an Account</p>
                <Link to="/login_d" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Login
                </Link>
        </form>  
        
    </div>
</div>
    /*
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      
      <div className="flex justify-center items-center h-full">
        
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button fullWidth variant="contained" color="primary" className="mt-4">
            Sign In
          </Button>
        </div>

         Separator 
        <div className="h-full w-0.5 bg-gray-300 mx-4"></div>

        Sign Up Section 
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className='flex'>
          <TextField  
            fullWidth
            label="Full Name"
            type="text"
            variant="outlined"
            margin="normal"
          />
        <FormLabel component="legend" >Gender</FormLabel>
          <RadioGroup row aria-label="gender" name="gender" className='ml-20' >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          </div>
          <div>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
          />
          <Select
            fullWidth
            variant="outlined"
            margin="normal"
            defaultValue=""
            displayEmpty
          >
            <MenuItem value="" disabled>Select Specialty</MenuItem>
            <MenuItem value="General Practitioner">General Practitioner</MenuItem>
            <MenuItem value="Psychiatrist">Psychiatrist</MenuItem>
            <MenuItem value="Nutritionist">Nutritionist</MenuItem>
          </Select>
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Age"
            type="number"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Workplace"
            type="text"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button fullWidth variant="contained" color="primary" className="mt-4">
            Sign Up
          </Button>
          </div>
        </div>
      </div>
    </div>*/
  );
}

export default Doctor;
