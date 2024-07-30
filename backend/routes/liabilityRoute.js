const express = require('express');
const { addLiability } = require('../controllers/liabilityController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', protect, addLiability);
// Similarly, define routes for listing, removing, and updating liabilities

module.exports = router;
