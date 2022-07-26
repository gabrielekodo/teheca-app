const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  code: {
    type: String,
    unique: true,
  },
  productType: String,
  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
  },
  costPrice: Number,
  sellPrice: Number,
  inStock: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
