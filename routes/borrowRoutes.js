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

const{
    createBorrow,
    getAllBorrows,
    getBorrowHistoryByUser,
    markAsReturned,
    deleteBorrow
} = require('../controllers/borrowController')

router.post('/', createBorrow)
router.get('/me/:userId', getBorrowHistoryByUser)
router.get('/', getAllBorrows)
router.patch('/return/:id', markAsReturned);
router.delete('/:id', deleteBorrow)


module.exports = router
