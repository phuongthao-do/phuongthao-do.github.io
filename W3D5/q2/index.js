const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('<form action="/result" method="post"><label>Name<input type="text" name="name"></label><label>Age<input type="text" name="age"></label><input type="submit" name="Submit Query"></form>')
})

app.post('/result',(req,res) => {
    res.send(`Welcome ${req.body.name}, your age is ${req.body.age}`);
})

app.listen(4000, () => {console.log("Server q2 is running");})