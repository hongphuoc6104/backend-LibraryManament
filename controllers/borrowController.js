const Borrow = require('../models/Borrow')

const createBorrow = async (req, res) => {
    try {
        const { userId, bookId, ngayTra } = req.body
        const newBorrow = new Borrow({ userId, bookId, ngayTra })
        await newBorrow.save()
        res.status(201).json(newBorrow)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'Không thể tạo phiếu mượn sách' })
    }
}

const getBorrowHistoryByUser = async (req, res) => {
    try{
        const borrows = await Borrow.find({ userId: req.params.userId}).populate('bookId')
        res.status(200).json(borrows)
    } catch(error) {
        console.error(error)
        res.status(500).json({ message: 'Lỗi khi lấy lịch sử mượn của người dùng'})
    }
}

const getAllBorrows = async (req, res) => {
    try{
        const borrows = await Borrow.find().populate('userId').populate('bookId')
        res.status(200).json(borrows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Lỗi khi lấy danh sách phiếu mượn'})
    }
}

module.exports = {
    createBorrow,
    getBorrowHistoryByUser,
    getAllBorrows
}