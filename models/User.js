// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: Bảng dữ liệu người dùng.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    hoLot: String,
    ten: String,
    ngaySinh: Date,
    diaChi: String,
    dienThoai: String,
});

module.exports = mongoose.model('User', UserSchema);