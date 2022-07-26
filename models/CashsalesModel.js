
const mongoose = require("mongoose");


const CashsalesSchema = new mongoose.Schema({
  productName: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "product has to be purchased"],
  },
  tonnage: {
    type: Number,
    required: [true, "tonnage is required"],
  },
  amountPaid: {
    type: Number,
    required: [true, "Amount is required"],
  },
  branch: {
    type: String,
    required: [true, "Branch is required"],
  },
  customerName: {
    type: String,
    required: [true, "Customer name is required"],
  },
  agentName: {
    type: mongoose.Schema.ObjectId,
    ref: "Employee",
    required: [true, "product sold by an employee"],
  },
  customerContact: {
    type: String,
    required: [true, "Customer contact is required"],
  },
  purchaseDate: {
    type: Date,
    required: [true, "Purchase date is required"],
  },
  
});

CashsalesSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'agentName',
    select: 'name branch'
  }).populate({
    path: 'productName',
    // select: 'name'
  });


  next();
});


module.exports=mongoose.model('Cashsale',CashsalesSchema)