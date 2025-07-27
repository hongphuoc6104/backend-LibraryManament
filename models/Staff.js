// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: Bảng dữ liệu nhân viên.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    msnv: Number,
    hoTenNV: String,
    chucVu: String,
    diaChi: String,
    soDienThoai: String
});

module.exports = mongoose.model('Staff', StaffSchema);
