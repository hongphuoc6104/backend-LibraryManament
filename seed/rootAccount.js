// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: tạo tài khoản kiểm tra hệ thống.
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const Account = require('../models/Account');
const Staff = require('../models/Staff');
const bcrypt = require('bcryptjs');

async function createRootAdmin() {
  const existing = await Account.findOne({ email: 'root@admin.com' });
  if (existing) return;

  // Tạo Staff cho tài khoản admin gốc
  const rootStaff = new Staff({
    msnv: '0000',
    hoTenNV: 'Root Admin',
    chucVu: 'Toàn quyền hệ thống',
    diaChi: 'Trụ sở hệ thống',
    soDienThoai: '0000000000'
  });

  await rootStaff.save();

  // Tạo tài khoản admin gắn với Staff
  const hashedPass = await bcrypt.hash('root1234', 10);
  const rootAccount = new Account({
    email: 'root@admin.com',
    password: hashedPass,
    role: 'admin',
    refId: rootStaff._id,
    refModel: 'Staff'
  });

  await rootAccount.save();
  console.log(' Đã tạo tài khoản root admin mặc định');
}

module.exports = createRootAdmin;
