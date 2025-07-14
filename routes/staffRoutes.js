const express = require('express')
const router = express.Router()

const { createStaff, getAllStaff } = require('../controllers/staffController')

router.post('/', createStaff)
router.get('/', getAllStaff)

module.exports = router
