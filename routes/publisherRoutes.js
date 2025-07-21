const express = require('express');
const router = express.Router();
const { createPublisher, getAllPublishers, deletePublisher, updatePublisher } = require('../controllers/publisherController');

router.post('/', createPublisher);
router.get('/', getAllPublishers);
router.put('/:id', updatePublisher);
router.delete('/:id', deletePublisher);

module.exports = router;
