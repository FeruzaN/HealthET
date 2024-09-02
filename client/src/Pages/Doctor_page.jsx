import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

function Doctor() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/doctors/register', { name, email, password, gender, dob, age, specialty, workplace })
      .then(result => {
        console.log(result);
        navigate('/login_d');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <Header />

      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
          <h2 className="text-2xl font-semibold mb-4">Doctor Registration</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              type="text"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="mb-3">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              margin="normal"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <TextField
              fullWidth
              label="Age"
              type="number"
              variant="outlined"
              margin="normal"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Select
              fullWidth
              variant="outlined"
              margin="normal"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>Select Specialty</MenuItem>
              <MenuItem value="General Practitioner">General Practitioner</MenuItem>
              <MenuItem value="Psychiatrist">Psychiatrist</MenuItem>
              <MenuItem value="Nutritionist">Nutritionist</MenuItem>
            </Select>
            <TextField
              fullWidth
              label="Workplace"
              type="text"
              variant="outlined"
              margin="normal"
              value={workplace}
              onChange={(e) => setWorkplace(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
              Register
            </Button>
            <p className="mt-4 text-center">
              Already have an account? <Link to="/login_d" className="text-blue-500">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
