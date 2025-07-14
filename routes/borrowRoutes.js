const express = require('express')
const router = express.Router()

const{
    createBorrow,
    getAllBorrows,
    getBorrowHistoryByUser
} = require('../controllers/borrowController')

router.post('/', createBorrow)

router.get('/me/:userId', getBorrowHistoryByUser)

router.get('/', getAllBorrows)

module.exports = router
