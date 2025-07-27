// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: Bảng dữ liệu phiếu mượn.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const mongoose = require('mongoose');

const BorrowSchema = new mongoose.Schema({
    borrowerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['User', 'Staff']
    },
    bookId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book', 
        required: true 
    },
    ngayMuon: { type: Date, default: Date.now },
    ngayTra: { type: Date }, // Ngày hẹn trả
    
    // --- TRƯỜNG MỚI ---
    ngayThucTra: { type: Date }, // Ngày thực tế trả sách
    status: {
        type: String,
        enum: ['Đang mượn', 'Đã trả'],
        default: 'Đang mượn'
    }
});

module.exports = mongoose.model('Borrow', BorrowSchema);