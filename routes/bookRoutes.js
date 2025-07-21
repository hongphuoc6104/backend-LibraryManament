const express = require('express');
const {
  getAllBooks,
  getBookByMaSach,
  createBook,
  updateBook, 
  deleteBook,
  getOutOfStockBooks
} = require('../controllers/bookController.js');

const router = express.Router();

router.get('/out-of-stock', getOutOfStockBooks);

router.get('/', getAllBooks);
router.post('/', createBook);
router.get('/masach/:maSach', getBookByMaSach);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
