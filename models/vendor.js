const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
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
    }
}, {
    timestamps: true
});

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;