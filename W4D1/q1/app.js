const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'css')))
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, "view"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {;
    let key = req.cookies.key;
    let value = req.cookies.value;
	res.render("index"
    ,{
        key: key,
        value: value
    }
    );
});
app.post('/addCookies',(req,res) => {
    var minute = 3000;
    if(req.body.key){
        res.cookie("key", req.body.key,{maxAge: minute});
    }
    if(req.body.value){
        res.cookie("value", req.body.value, {maxAge: minute});
    }

    res.redirect('/');
})

app.listen(3001, () => {
    console.log("W4D1 q1 server is running")});