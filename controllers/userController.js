const User = require('../models/User');
const Account = require('../models/Account');

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Lỗi tạo người dùng:', error.message);
    res.status(400).json({ message: 'Không thể tạo người dùng' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Lỗi lấy danh sách người dùng:', error.message);
    res.status(500).json({ message: 'Không thể lấy danh sách người dùng' });
  }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        // Tìm và xóa tài khoản đăng nhập liên quan
        await Account.findOneAndDelete({ refId: userId, refModel: 'User' });
        // Tìm và xóa hồ sơ người dùng
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        res.status(200).json({ message: 'Người dùng đã được xóa thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa người dùng' });
    }
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser
};
