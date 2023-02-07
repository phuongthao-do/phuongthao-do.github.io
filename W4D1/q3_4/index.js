const express = require("express");
const session = require('express-session');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Product = require("./model/products");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "css")));
app.set("views", path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(session({secret: "salt for cookie signing"}));
const products = Product.getAll();

const port = 3000;

//if a session cart exists in the current request object. 
//If it doesn't exist, it creates an empty object for the cart
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = {};
  }
  next();
});

app.get("/", (req, res) => {
  res.render("products", { products });
});
app.post("/addToCart", (req, res) => {
  const { name, price } = req.body;
  if(name in req.session.cart){
    req.session.cart[name]["quantity"] = (req.session.cart[name]["quantity"] || 0) + 1;
  }else{
    let product = {
      price: price,
      quantity: 1
    };
    req.session.cart[name] = {...product};
  }
  let productsObj = req.session.cart;
  res.render("shoppingCart", { products: productsObj });
});
app.listen(port, () => console.log(`W4D1 app listening on port ${port}!`));
