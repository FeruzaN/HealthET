const express = require('express');
const router = express.Router();
const { registerDoctor, login } = require('../controllers/docAuthController');

// Register a new doctor
router.post('/register', registerDoctor);
router.post('/login', registerDoctor);

module.exports = router;
