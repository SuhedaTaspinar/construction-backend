const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    phone: { type: String, default: null },
    mail: { type: String, default: null },
    instagram: { type: String, default: null },
    twitter: { type: String, default: null },
    youtube: { type: String, default: null },
    address: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);

