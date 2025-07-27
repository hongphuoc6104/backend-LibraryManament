// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: Bảng dữ liệu nhà xuất bản.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema({
    maNXB: {type: Number, required: true, unique: true},
    tenNXB: {type: String, required: true},
    diaChi: String
});

module.exports = mongoose.model('Publisher', PublisherSchema);
