const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    image: { type: Object, default: null },
    name: { type: String, required: true },
    address: { type: String, required: true },
    features: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
