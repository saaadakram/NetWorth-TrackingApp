const express = require('express');
const { addAsset } = require('../controllers/assetController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', protect, addAsset);
// Similarly, define routes for listing, removing, and updating assets

module.exports = router;
