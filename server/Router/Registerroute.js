const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ConsumerModel = require("../Models/ConsumerModel");
const EngineerModel = require("../Models/EngineerModel");

    const salt = bcrypt.genSaltSync(10);

router.post("/consumerRegister", async (req, res) => {
  const { userName, fullName, email, password } = req.body;
 
  try {
    await ConsumerModel.create({
      userName,
      fullName,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.json({ message: "Registration successful!" });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: "Registration failed" });
  }
});
// EngineerLogin
router.post("/EngineerRegister", async (req, res) => {

  const { userName, fullName, email, password } = req.body;
//   console.log("working")
  try{
  await EngineerModel.create({
    userName,
    fullName,
    email,
    password: bcrypt.hashSync(password, salt),
  });

  res.json({ message: "Engineer Registration successful!" });
} catch (error) {
  console.log(error)
  res.status(400).json({ error: "Registration failed" });
}
});

module.exports = router;
