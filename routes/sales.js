const express = require("express");
const mongoose = require("mongoose");

//router
const router = express.Router();

//require model
const Procurement = require("../models/ProcumentModel");
const Cashsale = require("../models/CashsalesModel");
const Creditsale = require("../models/CreditModel");

//procurement post request to /procurement
router.route("/procurement").post(async (req, res) => {
  console.log(req.body);
  const date = new Date(`${req.body.date} ${req.body.time}`).toISOString();
  console.log(date);
  let produTonnage;
let user={
  
}
  try {
    const newProduce = new Procurement({
      produceName: req.body.producename,
      produceType: req.body.producetype,
      produceSource: req.body.producesource,
      tonnage: Number(req.body.tonnage),
      costPrice: Number(req.body.cost),
      sellingPrice: Number(req.body.sellingprice),
      supplierName: req.body.dealer,
      supplierContact: req.body.phone,
      branchStocked: req.body.branch,
      purchaseDate: date,
    });
    await newProduce.save();
    res.render("dashboard", { msg: "posted successfully",user });
  } catch (error) {
    res.render("dashboard", { error: "something went wrong" });
  }
});

//GET all products

//cash sale post request to /sales/cashsale
router.route("/cashsale").post(async (req, res) => {
  console.log(req.body);
  try {
    const date = new Date(`${req.body.date} ${req.body.time}`).toISOString();
    const newCashSale = new Cashsale({
      produceName: req.body.producename,
      tonnage: req.body.tonnage,
      amountPaid: req.body.amountpaid,
      branchName: req.body.branch,
      customerName: req.body.customername,
      agentName: req.body.agent,
      customerContact: req.body.phone,
      purchaseDate: req.body.date,
    });

    await newCashSale.save();

    res.render("receipt", { title: "Receipt", msg: "Successful purchase" });
  } catch (error) {
    res.send("something went wrong");
  }
});

//credit sale post request to /sales/creditsale
router.route("/creditsale").post((req, res) => {
  console.log(req.body);

  res.render("success", { msg: "successful post" });
});
//GET one product

//UPDATE PRODUCT

//DELETE PRODUCT

module.exports = router;
