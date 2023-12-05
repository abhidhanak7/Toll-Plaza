const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config();
require('./config/db.config');
const receiptRoutes = require('./routes/Receipt');

// Import Routes
app.use(express.json());
app.use(cors());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json("Welcome our toll plaza API...");
});

// Receipt Routes
app.use('/api', receiptRoutes);

// Listen on Port
app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});