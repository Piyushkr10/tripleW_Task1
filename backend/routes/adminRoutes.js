const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();
const ADMIN = {
   username: "admin",
   password: bcrypt.hashSync("admin123", 10),
};

// Admin Login
router.post("/login", (req, res) => {
   const { username, password } = req.body;

   if (username === ADMIN.username && bcrypt.compareSync(password, ADMIN.password)) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(200).json({ token });
   } else {
      res.status(401).json({ error: "Invalid credentials" });
   }
});

// Fetch All Users
router.get("/users", (req, res) => {
   const token = req.header("Authorization");
   if (!token) return res.status(401).json({ error: "Access Denied" });

   try {
      jwt.verify(token, process.env.JWT_SECRET);
      User.find()
         .then((users) => res.status(200).json(users))
         .catch((err) => res.status(500).json({ error: err.message }));
   } catch {
      res.status(400).json({ error: "Invalid Token" });
   }
});

module.exports = router;

