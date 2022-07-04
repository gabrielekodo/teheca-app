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
  produceName: {
    type: String,
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
  branchName: {
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
  sellingStaff: {
    type: String,
    required: [true, "agent's name is required"],
  },
});

module.exports = mongoose.model("Creditsale", CreditsalesSchema);
