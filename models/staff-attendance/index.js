const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    fingerId: {
        type: Number,
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

attendanceSchema.index({ date: -1 });


module.exports = mongoose.model('Attendance', attendanceSchema);