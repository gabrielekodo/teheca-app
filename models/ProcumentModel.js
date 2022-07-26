const mongoose = require("mongoose");

const ProcurementSchema = new mongoose.Schema({
  produce: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "product name is required"],
  },

  produceSource: {
    type: String,
    required: true,
  },
  produceType: {
    type: String,
    required: true,
  },
  tonnage: {
    type: Number,
    required: true,
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
  branch: {
    type: String,
    required: true,
  },
  supplierContact: {
    type: String,
    required: true,
  },
});

ProcurementSchema.pre(/^find/, function (next) {
  this.populate({
    path: "produce",
    // select: "name branch",
  });

  next();
});
// .populate({
//     path: "productName",
//     // select: 'name'
//   });

module.exports = mongoose.model("Procurement", ProcurementSchema);
