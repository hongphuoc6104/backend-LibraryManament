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
const { createPublisher, getAllPublishers, deletePublisher, updatePublisher } = require('../controllers/publisherController');

router.post('/', createPublisher);
router.get('/', getAllPublishers);
router.put('/:id', updatePublisher);
router.delete('/:id', deletePublisher);

module.exports = router;
