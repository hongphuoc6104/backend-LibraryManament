const Staff = require('../models/Staff')

const createStaff = async (req, res) => {
    try{
        const newStaff = new Staff(req.body)
        await newStaff.save()
        res.status(201).json(newStaff)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'Không thể tạo nhân viên mới'});
    }
}

const getAllStaff = async (req, res) => {
    try{
        const staffList = await Staff.find()
        res.status(200).json(staffList)
    } catch (error ) {
        console.error(error)
        res.status(400).json({ message: 'Lỗi khi lấy danh sách nhân viên'})
    }
}

module.exports = {
    createStaff,
    getAllStaff,
}