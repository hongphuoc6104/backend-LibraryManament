const Publisher = require('../models/Publisher');

const createPublisher = async (req, res) => {
  try {
    const newPublisher = new Publisher(req.body);
    await newPublisher.save();
    res.status(201).json(newPublisher);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Không thể tạo nhà xuất bản' });
  }
};

const getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.status(200).json(publishers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách nhà xuất bản' });
  }
};

module.exports = {
  createPublisher,
  getAllPublishers
};
