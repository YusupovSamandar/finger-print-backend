const Attendance = require("./../models/staff-attendance");
const moment = require('moment-timezone');

const getAllAttendance = async (req, res) => {
    const allAttendance = await Attendance.find({});
    res.send(allAttendance);
}

const markStaffAttandance = async (req, res) => {
    const { staffId } = req.body;
    const uzbekistanTime = moment.tz(new Date(), 'Asia/Tashkent'); // Get current date in Uzbekistan Timezone

    const endOfTheDayDate = moment.tz(new Date(), 'Asia/Tashkent').endOf('day').toDate(); // Get current date in Uzbekistan Timezone
    const startOfTheDayDate = moment.tz(new Date(), 'Asia/Tashkent').startOf('day').toDate(); // Get current date in Uzbekistan Timezone

    try {
        // Find the attendance record for the staff member and today's date
        let attendanceRecord = await Attendance.findOne({
            staffId: staffId,
            date: {
                $gte: startOfTheDayDate, // Start of the day in Uzbekistan Timezone
                $lte: endOfTheDayDate // End of the day in Uzbekistan Timezone
            }
        });

        if (!attendanceRecord) {
            // If no attendance record exists, create a new one
            attendanceRecord = new Attendance({
                staffId: staffId,
                date: uzbekistanTime.toDate(), // Save date as a JavaScript Date object
                arrivalTime: uzbekistanTime.toDate()
            });
        } else {
            attendanceRecord.departureTime = uzbekistanTime.toDate();
        }

        // Save the attendance record
        await attendanceRecord.save();
        res.status(200).json({ message: 'Attendance recorded successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

module.exports = {
    getAllAttendance,
    markStaffAttandance
}