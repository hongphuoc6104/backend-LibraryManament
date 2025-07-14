const express = require('express');
const {
  getAllBooks,
  getBookByMaSach,
  createBook
} = require('../controllers/bookController.js');

const router = express.Router();

router.get('/', getAllBooks);
router.post('/', createBook);
router.get('/masach/:maSach', getBookByMaSach);

module.exports = router;
