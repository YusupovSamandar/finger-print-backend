const express = require('express');
const router = express.Router();
const Attendance = require("./../controllers/staffAttendanceController");

router.get('/', Attendance.getAllAttendance);
router.post('/mark', Attendance.markStaffAttandance);

module.exports = router;