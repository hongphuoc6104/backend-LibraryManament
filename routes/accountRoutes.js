const express = require('express')
const router = express.Router()

const {
    register,
    login,
    getCurrentAccount
} = require('../controllers/accountController')

router.post('/register', register)
router.post('/login', login)
router.get('/me/:email', getCurrentAccount)

module.exports = router