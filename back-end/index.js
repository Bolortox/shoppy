const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Product = mongoose.model("Product", ProductSchema);

// Routes
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
