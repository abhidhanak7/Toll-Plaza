const express = require('express');
const router = express.Router();
const { CreateReceipt, GetReceipts } = require('../controllers/ReceiptController');

// Create a new receipt
router.post('/receipt', CreateReceipt);

// Get all receipts
router.get('/receipt', GetReceipts);

module.exports = router;