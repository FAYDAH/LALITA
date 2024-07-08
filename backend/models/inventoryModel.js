const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Inventory', inventorySchema);