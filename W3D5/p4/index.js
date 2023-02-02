const express = require('express');
const app = express();
const path = require('path');

const date = new Date();
const hour = date.getHours();

app.use(express.static(path.join(__dirname, '/css')))
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.get('/output',(req,res) => {
    res.send(`Welcome ${req.query.name}, your age is ${req.query.age}`);
})

app.listen(3002, () => { console.log("Server q4 is running"); })