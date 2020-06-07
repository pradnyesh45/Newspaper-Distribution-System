const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    bankAccountNumber: {
        type: Number,
        required: true
    },
    IFSCCode: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;