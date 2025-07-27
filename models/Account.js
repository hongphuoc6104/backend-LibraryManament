// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: Bảng dữ liệu tài khoản.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({
    email:      { type: String, required: true, unique: true },
    password:   { type: String, required: true },
    role:       { type: String, enum: ['user', 'admin']},
    refId:      { type: mongoose.Schema.Types.ObjectId, required: true },
    refModel:   { type: String, enum: ['User', 'Staff'], required: true }
});


module.exports = mongoose.model('Account', AccountSchema);
