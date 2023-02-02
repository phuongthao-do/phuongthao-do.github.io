const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

    if (!name) { name = "person"; }
    if (!age) { age = 1; }

    res.send(`Welcome ${name}, your age is ${age}`);
});

app.listen(3000,() => { console.log("Server q1 is runing")});