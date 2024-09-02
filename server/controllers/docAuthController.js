const Doctor = require('../models/Doc_Model');
const bcrypt = require('bcryptjs'); // Use bcryptjs for hashing passwords
const jwt = require('jsonwebtoken'); // Use jsonwebtoken for creating tokens

// Register a new doctor
exports.registerDoctor = async (req, res) => {
    try {
        const { name, email, password, workplace, specialty, age, dob, gender } = req.body;

        // Check if doctor already exists
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Doctor already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new doctor
        const newDoctor = new Doctor({
            name,
            email,
            password: hashedPassword,
            workplace,
            specialty,
            age,
            dob,
            gender,
        });

        await newDoctor.save();

        // Optionally create a JWT token and send it back with the response
        const token = jwt.sign(
            { id: newDoctor._id, email: newDoctor.email },
            'your_jwt_secret', // Replace with your secret key
            { expiresIn: '1h' }
        );

        res.status(201).json({ message: 'Doctor registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Login function
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if doctor exists
        const doctor = await Doctor.findOne({ email });
        if (!doctor) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: doctor._id, email: doctor.email },
            'your_jwt_secret', // Replace with your secret key
            { expiresIn: '1h' }
        );

        res.json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
