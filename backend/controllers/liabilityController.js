const Liability = require('../models/liability');

exports.addLiability = async (req, res) => {
  const { name, value } = req.body;
  try {
    const liability = await Liability.create({ name, value, user: req.user.id });
    res.status(201).json({ success: true, data: liability });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Similarly, define listLiabilities, removeLiability, and updateLiability functions
