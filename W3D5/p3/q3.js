const express = require('express');
const app = express();
const path = require('path');

const date = new Date();
const hour = date.getHours();

app.use(express.static(path.join(__dirname, '/css')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

const dayCss = (rea, res, next) => {
    app.use(express.static(path.join(__dirname, 'css','day.css')));
    next();
}
const nightCss = (rea, res, next) => {
    app.use(express.static(path.join(__dirname, 'css','day.css')));
    next();
}

app.listen(3001, () => { console.log("Server q3 is running"); })