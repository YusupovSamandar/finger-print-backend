const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    arrivalTime: {
        type: Date,
    },
    departureTime: {
        type: Date,
    }

});

module.exports = mongoose.model('Attendance', attendanceSchema);