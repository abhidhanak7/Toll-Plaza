const Receipt = require("../models/Receipt");

// Create a new receipt
const CreateReceipt = async (req, res) => {
    const { vehicleNumber, isReturn, charge } = req.body;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const endOfToday = new Date(today);
    endOfToday.setHours(23, 59, 59, 999);

    // Check if receipt already exists
    const isReceiptExists = await Receipt.findOne({
        vehicleNumber,
        createdAt: { $gte: today, $lt: endOfToday },
    });

    if (isReceiptExists && isReceiptExists.isReturn === true) {
        return res.status(200).json({
            msg: "Receipt verified...",
            data: isReceiptExists,
        });
    }

    const newReceipt = await Receipt.create({
        vehicleNumber,
        isReturn,
        charge,
    });
    res.status(200).json({
        msg: "Receipt created...",
        data: newReceipt,
    });
};

// Get all receipts
const GetReceipts = async (req, res) => {
    const receipts = await Receipt.find();
    res.status(200).json({
        msg: "Receipt retrieved...",
        data: receipts,
    });
};

module.exports = {
    CreateReceipt,
    GetReceipts,
};
