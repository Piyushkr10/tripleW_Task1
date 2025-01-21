const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   name: { type: String, required: true },
   socialMedia: { type: String },
   image: { type: String },
});

module.exports = mongoose.model("User", userSchema);
