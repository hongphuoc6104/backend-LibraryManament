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
const express = require('express')
const router = express.Router()

const {
    register,
    login,
    getCurrentAccount
} = require('../controllers/accountController')

router.post('/register', register)
router.post('/login', login)
router.get('/me/:email', getCurrentAccount)

module.exports = router