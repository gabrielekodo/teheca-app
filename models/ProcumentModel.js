const mongoose = require("mongoose");

const ProcurementSchema = new mongoose.Schema({
  produceName: {
    type: String,
    required: true,
  },
  produceType: {
    type: String,
    required: true,
  },
  produceSource: {
    type: String,
    required: true,
  },
  tonnage: {
    type: Number,
    required: true,
    
  },
  threshold: {
    type: Number,
    required: true,
    default:100
    
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
  branchStocked: {
    type: String,
    required: true,
  },
  supplierContact: {
    type: String,
    required: true,
  },
});





module.exports = mongoose.model("Procurement", ProcurementSchema);