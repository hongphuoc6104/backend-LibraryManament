const express = require('express');
const router = express.Router();
const { createAdmin, getAllStaff, updateStaff, deleteStaff } = require('../controllers/staffController');

router.post('/admin', createAdmin); 
router.get('/', getAllStaff);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

module.exports = router;