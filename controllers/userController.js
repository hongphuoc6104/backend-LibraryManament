const User = require('../models/User');

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

module.exports = {
  createUser,
  getAllUsers
};
