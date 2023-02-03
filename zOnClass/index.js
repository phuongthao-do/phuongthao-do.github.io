const express = require('express');

const app = express();

app.get('/',(req, res) =>{
    res.render("onClass.html");
})

app.listen(3000, (rew, res) => {
    console.log("OnClass server is runing");
})