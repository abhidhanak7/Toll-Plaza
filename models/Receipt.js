// Import the mongoose library
const mongoose = require('mongoose');

// Define the schema for the User collection
const receiptSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
  },
  isReturn: {
    type: Boolean,
    required: true,
    default: false,
  },
  charge: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const Receipt = mongoose.model('Receipt', receiptSchema);

// Export the Receipt model for use in other files
module.exports = Receipt;
