const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/css')))
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.post('/result',(req,res) => {
    res.send(`Welcome ${req.body.name}, your age is ${req.body.age}`);
})

app.listen(3001, () => { console.log("Server q3 is running"); })