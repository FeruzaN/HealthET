const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
require('dotenv').config();
const doctorRoutes = require('./routes/authRoutes');
const connectDB = require('./utilities/dbConnection');

const port = process.env.PORT || 5000;


const app = express();
app.use(express.json())
app.use(cors({
  origin: '*'
}))

connectDB();

app.use('/api/doctors', doctorRoutes);

app.get('/', (req, res) => {
  res.send('Hello, from server test');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

