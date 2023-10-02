const express = require('express');
const router = express.Router();
const Attendance = require("./../controllers/staffAttendanceController");

router.get('/', Attendance.getAllAttendance);
router.get('/with-date', Attendance.getAllAttendanceWithDate);
router.post('/mark', Attendance.markStaffAttandance);
router.get('/staff/:id', Attendance.oneStaffReport);

module.exports = router;