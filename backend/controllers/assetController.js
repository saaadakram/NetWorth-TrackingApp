const Asset = require('../models/Asset');

exports.addAsset = async (req, res) => {
  const { name, value } = req.body;
  try {
    const asset = await Asset.create({ name, value, user: req.user.id });
    res.status(201).json({ success: true, data: asset });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Similarly, define listAssets, removeAsset, and updateAsset functions
