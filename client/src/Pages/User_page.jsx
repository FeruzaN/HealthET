import Header from '../components/Header';
import { Button, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';

function User() {
  return (
    <div className="relative bg-cover bg-center h-screen bg-blue-50">
      <Header />
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Sign In</h2>
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

        {/* Separator */}
        <div className="h-full w-0.5 bg-gray-300 mx-4"></div>

        {/* Sign Up Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Sign Up</h2>
          <div className='flex flex-col'>
            <TextField
              fullWidth
              label="Full Name"
              type="text"
              variant="outlined"
              margin="normal"
            />
            <div className='mt-4'>
              <RadioGroup row aria-label="gender" name="gender">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </div>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              className="mt-4"
            />
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              margin="normal"
              className="mt-4"
            />
            <TextField
              fullWidth
              label="Age"
              type="number"
              variant="outlined"
              margin="normal"
              className="mt-4"
            />
            <TextField
              fullWidth
              label="Address"
              type="text"
              variant="outlined"
              margin="normal"
              className="mt-4"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              className="mt-4"
            />
            <Button fullWidth variant="contained" color="primary" className="mt-4">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
