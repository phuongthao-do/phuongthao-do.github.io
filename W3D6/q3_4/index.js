const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Product = require("./model/products");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "css")));
app.set("views", path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const products = Product.getAll();

const port = 3000;

app.get("/", (req, res) => {
  res.render("products", { products });
});
app.post("/addProduct", (req, res) => {
  const { name, id, price, des } = req.body;
  let newProduct = new Product(name, id, price, des);
  newProduct.save();
  res.redirect("/");
});
app.post("/addToCart", (req, res) => {
  console.log("Hello i'm here");
  res.render("shoppingCart", { products });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
