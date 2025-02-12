const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve static files for uploaded images

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);

// MongoDB Connection
mongoose
   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(process.env.PORT, () => console.log("Server running on port", process.env.PORT)))
   .catch((err) => console.error(err));
