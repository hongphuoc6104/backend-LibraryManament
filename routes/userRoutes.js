// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: khai báo router.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, deleteUser  } = require('../controllers/userController');

router.post('/', createUser);        // Tạo người dùng
router.get('/', getAllUsers);        // Lấy danh sách người dùng
router.delete('/:id', deleteUser);

module.exports = router;
