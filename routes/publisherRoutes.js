const express = require('express');
const router = express.Router();
const { createPublisher, getAllPublishers } = require('../controllers/publisherController');

router.post('/', createPublisher);
router.get('/', getAllPublishers);

module.exports = router;
