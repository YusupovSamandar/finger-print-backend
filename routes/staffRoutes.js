const express = require('express');
const router = express.Router();
const staffController = require("./../controllers/staffController");

router.get('/', staffController.getAllStaff);
router.post('/', staffController.createStaff);
router.put('/', staffController.updateStaff);
router.delete('/', staffController.deleteStaff);

module.exports = router;