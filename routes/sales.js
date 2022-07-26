const express = require("express");
const mongoose = require("mongoose");

//router
const router = express.Router();

//require model
const Product = require("../models/Product");
const Procurement = require("../models/ProcumentModel");
const Cashsale = require("../models/CashsalesModel");
const Creditsale = require("../models/CreditModel");
const CreditModel = require("../models/CreditModel");

//get All Products request to GET/products

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({
      status: "ok",
      results:products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//get one Products request to GET/products/id
router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    // console.log(product)
    if (!product) {
      res.status(400).json({
        status: "fail",
        message: "no such product",
      });
      
    }
    else{
      res.status(200).json({
        status: "ok",
        data: product,
      });

    }

  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//Add product POST /products
router.post("/products", async (req, res) => {
  try {
    let newProduct = await Product.create(req.body);

    res.status(200).json({
      status: "ok",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
    console.log(error);
  }
});

//update product PUT /products/id
router.put("/products/:id", async (req, res) => {
  try {
    let id = req.params.id;
    updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      res.status(400).json({
        status: "fail",
        message: "No product with that id",
      });
      return;
    }

    res.status(200).json({
      status: "ok",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//DELETE PRODUCT
router.delete("/products/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Product.findByIdAndDelete(id);

    res.status(204).json({
      status: "ok",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});


module.exports = router;
