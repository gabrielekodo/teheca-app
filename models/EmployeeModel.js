const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Employee name is required"],
    minlength: 6,
    maxlength: 25,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Employee email is required"],
    trim: true,
    unique: true,
  },

  phone: {
    type: String,
    required: [true, "Employee phone number is required"],
    minlength: 10,
    maxlength: 13,
    unique: true,
  },
  employeeID: {
    type: String,
    unique: true,
    required: [true, "Employee ID is required"],
    minlength: 6,
    maxlength: 8,
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: ["director", "manager", "agent"],
      message: "Enter right roles of director, manager or agent",
    },
  },

  branch: {
    type: String,
    required: [true, "Branch name is required"],
  },
  
});

// Export Model
EmployeeSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Employee", EmployeeSchema);
