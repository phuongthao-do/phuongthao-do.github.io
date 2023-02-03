module.exports = class Product {
  static products = [
    { name: "p1", price: "10$", description: "Product is one", id: 1 },
    { name: "p2", price: "11$", description: "Product is two", id: 2 },
    { name: "p3", price: "12$", description: "Product is three", id: 3 },
    { name: "p4", price: "13$", description: "Product is four", id: 4 },
  ];
  constructor(_id, _name, _price, _description) {
    this.name = _name;
    this.price = _price;
    this.description = _description;
    this.id = _id;
  }
  save() {
    Product.products.push({ ...this });
  }

  static getAll() {
    return Product.products;
  }
};
