const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('maNXB', 'tenNXB maNXB');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi máy chủ' });
    console.error(error);
  }
};

const getBookByMaSach = async (req, res) => {
  try {
    const book = await Book.findOne({ maSach: Number(req.params.maSach) }).populate('maNXB');
    if (!book) return res.status(404).json({ message: 'Không tìm thấy sách theo mã' });
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi lấy sách theo mã' });
  }
};


const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: 'Không thể tạo sách mới' });
    console.error(error);
  }
};

module.exports = {
  getAllBooks,
  getBookByMaSach,
  createBook
};
