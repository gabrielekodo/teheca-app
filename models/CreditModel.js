const mongoose = require("mongoose");

const CreditsalesSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "Customer name is required"],
  },
  customerContact: {
    type: String,
    required: [true, "Customer contact is required"],
  },
  nationalId: {
    type: String,
    required: [true, "NIN Details is required"],
  },
  customerLocation: {
    type: String,
    required: [true, "Customer location is required"],
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",

    required: [true, "Produce name is required"],
  },
  produceType: {
    type: String,
    required: [true, "Produce name is required"],
  },
  tonnage: {
    type: Number,
    required: [true, "tonnage is required"],
  },
  amountPaid: {
    type: Number,
    required: [true, "Amount paid is required"],
  },
  amountDue: {
    type: Number,
    required: [true, "Amount remaining is required"],
  },
  branch: {
    type: String,
    required: [true, "Branch is required"],
  },
  purchaseDate: {
    type: Date,
    required: [true, "Purchase date is required"],
  },
  dueDate: {
    type: Date,
    required: [true, "Purchase date is required"],
  },
  dispatchDate: {
    type: Date,
    required: [true, "Purchase date is required"],
  },
  agent: {
    type: mongoose.Schema.ObjectId,
    ref: "Employee",
    required: [true, "agent's name is required"],
  },
});

CreditsalesSchema.pre(/^find/, function (next) {
  this.populate({
    path: "agent",
    select: "name branch",
  }).populate({
    path: "product",
  });
  next();
});

module.exports = mongoose.model("Creditsale", CreditsalesSchema);
