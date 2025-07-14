const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/userController');

router.post('/', createUser);        // Tạo người dùng
router.get('/', getAllUsers);        // Lấy danh sách người dùng

module.exports = router;
