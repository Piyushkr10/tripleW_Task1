const express = require("express");
const multer = require("multer");
const User = require("../models/User");

const router = express.Router();

const storage = multer.diskStorage({
   destination: (req, file, cb) => cb(null, "uploads"),
   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// User Submission Form
router.post("/", upload.single("image"), async (req, res) => {
   try {
      const newUser = new User({
         name: req.body.name,
         socialMedia: req.body.socialMedia,
         image: req.file?.path,
      });
      await newUser.save();
      res.status(201).json(newUser);
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
});

module.exports = router;
