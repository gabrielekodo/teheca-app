
const mongoose = require("mongoose");


const CashsalesSchema=new mongoose.Schema({
produceName:{
    type:String,
    required:[true,'Produce name is required']
},
tonnage:{
    type:Number,
    required:[true,'tonnage is required']
},
amountPaid:{
    type:Number,
    required:[true,'Amount is required']
},
branchName:{
    type:String,
    required:[true,'Branch is required']
},
customerName:{
    type:String,
    required:[true,'Customer name is required']
},
agentName:{
    type:String,
    required:[true,'Agent name is required']
},
customerContact:{
    type:String,
    required:[true,'Customer contact is required']
},
purchaseDate:{
    type:Date,
    required:[true,'Purchase date is required']
},
})

module.exports=mongoose.model('Cashsale',CashsalesSchema)