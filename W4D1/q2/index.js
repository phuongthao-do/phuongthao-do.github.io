const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/css')))
app.use(express.urlencoded({extended: false}));
app.use(session({secret: "salt for cookie sign"}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.post('/output',(req,res) => {
   
    req.session.user = {
        name: req.body.name,
        age: req.body.age
    };
    res.redirect('/')
    
})

app.get('/viewSession',(req,res) => {
    let {name, age} = req.session.user;
    res.send(`Welcome ${name}, your age is ${age}`);
})

app.listen(3001, () => { console.log("Server q4 is running"); })