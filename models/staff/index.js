const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        default: 'none'
    },
    fingerId: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Staff', staffSchema);