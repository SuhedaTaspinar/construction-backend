const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    image: { type: String, default: null },
    type: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
