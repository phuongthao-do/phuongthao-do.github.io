const req = require('express/lib/request');
const res = require('express/lib/response');
/*import express here --->*/const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
/*import product here --->*/const product = require('./product');

const products = [new product("Clock", "To tell the time.", 15, 'https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdda7d87988621de332dd_simply-productimg-6.jpg'),
new product("Chair", "To sit on.", 200, 'https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde965d8bac2ad7160b2e_simply-productimg-4.jpg'),
new product("Light", "To see things.", 394, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf797c41e5725aee16df_simply-productimg-1.jpg"),
new product("Table", "To put things on.", 302, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf006640d06648846d06_simply-productimg-3.jpg"),
new product("Zebra Frame", "A picture frame showcasing zebra skin.", 44934, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdf24dec3494629cc1926_simply-productimg-7.jpg"),
new product("Sofa", "To chill on.", 230, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdde6c1617c0acf787ae3_simply-productimg-2.jpg"),
new product("Dining Chair", "To sit on while dining", 34, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bdeefdec349268ccc173b_simply-productimg-9.jpg"),
new product("Wooden Chair", "To sit on, but less comfortably.", 232, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde857c41e5fb5dee10b9_simply-productimg-5.jpg"),
new product("Bowls", "To serve soup in.", 2, "https://assets.website-files.com/5d0754d8b6e7f897e55ae9bc/5e4bde13dec3492863cc1310_simply-productimg-8.jpg")]



/*initialize your app here --->*/app = express();
/*set up the view engine here --->*/app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser());
/*set up your session secret here*/app.use(session({
    secret: "thisismysecret",
    cookie: {maxAge: 1000*60*60*24*7},
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.render('index.ejs', { products: products, lengthOfItems: req.session.items ? req.session.items.length : 0});
});

app.get('/p', (req, res) => {
    res.render('product.ejs', {p: products[req.query.pnumber],  i: req.query.pnumber, lengthOfItems: req.session.items ? req.session.items.length : 0})
});

app.post('/add', (req, res) => {
    if(!req.session.items){
        req.session.items = [];
    }
    req.session.items.push(products[req.body.i]);
    res.redirect('/');
});


app.get('/cart', (req, res) => {
    let total = 0;
    if(req.session.items){
        req.session.items.forEach(item => {
            total += item.price;
        });
    }
    res.render('cart.ejs', {items: req.session.items, lengthOfItems: req.session.items ? req.session.items.length : 0, total: total});
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs', {lengthOfItems: req.session.items ? req.session.items.length : 0});
})



/*start your server here --->*/app.listen(3000, () => console.log("Server listening on port 3000"));


