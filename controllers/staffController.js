// /**
//  * ---------------------------------------------------------------------------------------------
//  * Tên dự án: Website Quản lý Thư viện Trực tuyến
//  * ---------------------------------------------------------------------------------------------
//  * Mô tả: File thêm sửa xóa thông tin nhân viên
//  *
//  * @author  Nguyễn Nhật Hồng Phước
//  * @mssv    B2308385
//  * @date    27/07/2025
//  *
//  * @copyright (c) 2025 Nguyễn Nhật Hồng Phước. All rights reserved.
//  * ---------------------------------------------------------------------------------------------
//  */ 
const Staff = require('../models/Staff');
const Account = require('../models/Account');
const bcrypt = require('bcryptjs');

// Tạo mới một nhân viên VÀ tài khoản admin cho họ
const createAdmin = async (req, res) => {
    const { email, password, hoTenNV, chucVu, diaChi, soDienThoai } = req.body;
    try {
        // 1. Kiểm tra xem email đã tồn tại chưa
        const accountExists = await Account.findOne({ email });
        if (accountExists) return res.status(400).json({ message: 'Email đã được sử dụng' });

        // 2. Tạo hồ sơ nhân viên mới
        const newStaff = new Staff({ hoTenNV, chucVu, diaChi, soDienThoai });
        await newStaff.save();

        // 3. Tạo tài khoản admin liên kết
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAccount = new Account({
            email,
            password: hashedPassword,
            role: 'admin',
            refId: newStaff._id,
            refModel: 'Staff'
        });
        await newAccount.save();

        res.status(201).json({ staff: newStaff, account: newAccount });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo admin mới', error: error.message });
    }
};

// Sửa thông tin nhân viên
const updateStaff = async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStaff) return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
        res.status(200).json(updatedStaff);
    } catch (error) {
        res.status(400).json({ message: 'Không thể cập nhật nhân viên' });
    }
};

// Xóa nhân viên và tài khoản admin của họ
const deleteStaff = async (req, res) => {
    try {
        const staffId = req.params.id;
        await Account.findOneAndDelete({ refId: staffId, refModel: 'Staff' });
        const deletedStaff = await Staff.findByIdAndDelete(staffId);
        if (!deletedStaff) return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
        res.status(200).json({ message: 'Nhân viên đã được xóa thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa nhân viên' });
    }
};

// Lấy danh sách nhân viên
const getAllStaff = async (req, res) => {
    try {
        const staffList = await Staff.aggregate([
            {
                $lookup: {
                    from: 'accounts', 
                    localField: '_id',
                    foreignField: 'refId',
                    as: 'accountInfo'
                }
            },
            {
                $unwind: { 
                    path: '$accountInfo',
                    preserveNullAndEmptyArrays: true 
                }
            },
            {
                $project: { 
                    hoTenNV: 1,
                    chucVu: 1,
                    diaChi: 1,
                    soDienThoai: 1,
                    accountId: '$accountInfo._id', 
                    email: '$accountInfo.email',
                    role: '$accountInfo.role'
                }
            }
        ]);
        res.status(200).json(staffList);
    } catch (error) {
        console.error("Lỗi khi lấy danh sách nhân viên:", error);
        res.status(400).json({ message: 'Lỗi khi lấy danh sách nhân viên' });
    }
};

module.exports = {
    createAdmin,
    updateStaff,
    deleteStaff,
    getAllStaff
};