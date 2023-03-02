const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

// connect to mongodb
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@ebook.byaxdoi.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// create a schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

// create a model
const Product = mongoose.model("products", productSchema);

app.post("/api/products", async (req, res) => {
  const { name, price, description } = req.body;
  const product = await Product.create({
    name: name,
    price: price,
    description: description,
  });
  
  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400).json({ message: "Invalid product data" });
  }

});


app.listen(port, () => console.log(`Listening on port ${port}`));
