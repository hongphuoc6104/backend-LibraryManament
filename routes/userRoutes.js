const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, deleteUser  } = require('../controllers/userController');

router.post('/', createUser);        // Tạo người dùng
router.get('/', getAllUsers);        // Lấy danh sách người dùng
router.delete('/:id', deleteUser);

module.exports = router;
