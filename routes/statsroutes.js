const express = require("express");
const Procurement = require("../models/ProcumentModel");
const Cashclient = require("../models/CashsalesModel");
const Creditclient = require("../models/CreditModel");
const Product = require("../models/Product");

// const Employee = require("../models/EmployeeModel");
const router = express.Router();

//***********************cash sales ***************************

//get all cash clients
router.get("/cash/customers", async (req, res) => {
  try {
    const clients = await Cashclient.find(req.query);

    res.status(200).json({
      status: "ok",
      results: clients.length,
      data: clients,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "something went wrong",
    });
  }
});

//get one client request to GET/customer/id
router.get("/cash/customers/:id", async (req, res) => {
  try {
    let client = await Cashclient.findOne({ _id: req.params.id });
    // console.log(client)
    if (!client) {
      res.status(400).json({
        status: "fail",
        message: "no such customer",
      });
    } else {
      res.status(200).json({
        status: "ok",
        data: client,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//creating new cash sale
//Add client POST /customers
router.post("/cash/customers", async (req, res) => {
  try {
    // updating decrease quantity of the  product bought
    const purchasedItem = await Product.findById(req.body.productName);

    //checking if purchased amount is less than available stock
    if (req.body.tonnage <= purchasedItem.stockQuantity) {
      let item = await Product.findByIdAndUpdate(
        req.body.productName,
        { $inc: { stockQuantity: -req.body.tonnage } },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log(item);
    } else {
      res.status(500).json({
        status: "fail",
        message: "Reduce your order quantity",
      });
      // throw new Error("Reduce your order");
      return;
    }

    let newClient = await Cashclient.create(req.body);

    res.status(200).json({
      status: "ok",
      data: newClient,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
    console.log(error);
  }
});

//update cash client PUT /customers/id
router.put("/cash/customers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    updatedClient = await Cashclient.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedClient) {
      res.status(400).json({
        status: "fail",
        message: "No product with that id",
      });
      return;
    }

    res.status(200).json({
      status: "ok",
      data: updatedClient,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//DELETE client
router.delete("/cash/customers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Cashclient.findByIdAndDelete(id);

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

// *************************** credit sales routes********************

//get all credit clients
router.get("/credit/customers", async (req, res) => {
  try {
    const clients = await Creditclient.find();

    res.status(200).json({
      status: "ok",
      results: clients.length,
      data: clients,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "something went wrong",
    });
  }
});

//get one client request to GET/customer/id
router.get("/credit/customers/:id", async (req, res) => {
  try {
    let client = await Creditclient.findOne({ _id: req.params.id });
    // console.log(client)
    if (!client) {
      res.status(400).json({
        status: "fail",
        message: "no such customer",
      });
    } else {
      res.status(200).json({
        status: "ok",
        data: client,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//creating new credit sale
//Add client POST /customers
router.post("/credit/customers", async (req, res) => {
  try {
    // updating decrease quantity of the  product bought
    const purchasedItem = await Product.findById(req.body.product);

    //checking if purchased amount is less than available stock
    if (req.body.tonnage <= purchasedItem.stockQuantity) {
      let item = await Product.findByIdAndUpdate(
        req.body.product,
        { $inc: { stockQuantity: -req.body.tonnage } },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log(item);
    } else {
      res.status(500).json({
        status: "fail",
        message: "Reduce your order quantity",
      });
      // throw new Error("Reduce your order");
      return;
    }

    let newClient = await Creditclient.create(req.body);

    res.status(200).json({
      status: "ok",
      data: newClient,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
    console.log(error);
  }
});

//update credit client PUT /customers/id
router.put("/credit/customers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    updatedClient = await Creditclient.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedClient) {
      res.status(400).json({
        status: "fail",
        message: "No product with that id",
      });
      return;
    }

    res.status(200).json({
      status: "ok",
      data: updatedClient,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//DELETE client
router.delete("/credit/customers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Creditclient.findByIdAndDelete(id);

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

// ************************ SUPPLIERS *****************************
//get all suppliers
router.get("/suppliers", async (req, res) => {
  try {
    const supplies = await Procurement.find();

    res.status(200).json({
      status: "ok",
      results: supplies.length,
      data: supplies,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "something went wrong",
    });
  }
});

//get one supplier request to GET/suppliers/id
router.get("/suppliers/:id", async (req, res) => {
  try {
    let supplier = await Procurement.findOne({ _id: req.params.id });
    // console.log(client)
    if (!supplier) {
      res.status(400).json({
        status: "fail",
        message: "no such supply",
      });
    } else {
      res.status(200).json({
        status: "ok",
        data: supplier,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//creating new cash sale
//Add new Supplier POST /suppliers
router.post("/suppliers", async (req, res) => {
  try {
    let newSupply = await Procurement.create(req.body);

    res.status(200).json({
      status: "ok",

      data: newSupply,
    });

    // updating quantity of the supplied product
    let suppliedItem = await Product.findByIdAndUpdate(
      req.body.produce,
      { $inc: { stockQuantity: newSupply.tonnage } },
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
    console.log(error);
  }
});

//update supplier details PUT /suppliers/id
router.put("/suppliers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    updatedSupplier = await Procurement.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedSupplier) {
      res.status(400).json({
        status: "fail",
        message: "No supplier with that id",
      });
      return;
    }

    res.status(200).json({
      status: "ok",
      data: updatedSupplier,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
});

//DELETE supplier
router.delete("/suppliers/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Procurement.findByIdAndDelete(id);

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
