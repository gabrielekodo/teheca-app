const express = require("express");
const Procurement = require("../models/ProcumentModel");
const Cashclient = require("../models/CashsalesModel");
const Creditclient = require("../models/CreditModel");
const Product = require("../models/Product");

const Employee = require("../models/EmployeeModel");
const router = express.Router();


//total revenue and total tonnage for cash sales
router.get('/',async(req,res)=>{

    try {

        //cash sales
        let cashSales=await Cashclient.aggregate([
            {$match:{}},
            {$group:{_id:'$producename',
        totalRevenue:{$sum:'$amountPaid'},
    totalTonnage:{$sum:'$tonnage'}}}
        ])

        //credit sales
let creditSales = await Creditclient.aggregate([
  
  {
    $group: {
      _id: "$producename",
      totalAmountPaid: { $sum: "$amountPaid" },
      totalTonnageSold: { $sum: "$tonnage" },
      totalAmountDue: { $sum: "$amountDue" },
    },
  },
]);





        //sending response
        res.status(200).json({
          status: "ok",
          data: {cashSales,creditSales},
        });
        
    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:'something went wrong'
        })

    }
})






module.exports=router