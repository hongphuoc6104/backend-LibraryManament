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
const {
  getAllBooks,
  getBookByMaSach,
  createBook,
  updateBook, 
  deleteBook,
  getOutOfStockBooks
} = require('../controllers/bookController.js');

const router = express.Router();

router.get('/out-of-stock', getOutOfStockBooks);

router.get('/', getAllBooks);
router.post('/', createBook);
router.get('/masach/:maSach', getBookByMaSach);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
