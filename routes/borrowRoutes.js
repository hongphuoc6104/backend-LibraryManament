const express = require('express')
const router = express.Router()

const{
    createBorrow,
    getAllBorrows,
    getBorrowHistoryByUser,
    markAsReturned,
    deleteBorrow
} = require('../controllers/borrowController')

router.post('/', createBorrow)
router.get('/me/:userId', getBorrowHistoryByUser)
router.get('/', getAllBorrows)
router.patch('/return/:id', markAsReturned);
router.delete('/:id', deleteBorrow)


module.exports = router
