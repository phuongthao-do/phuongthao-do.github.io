const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(cookieParser())
app.use(session({secret: 'salt for cookie setting'}))
app.use(express.static(path.join(__dirname, '/css')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
	const date = new Date();
	res.cookie('myVal', date)
	req.session.id = "MyId";
    res.render('onClass');
});

app.get('/getInfo', (req, res) => {
	// res.cookie('myVal', 1212)
	res.render('getInfo')
	console.log(req.session)
})
app.listen(3000, () => {console.log("OnClass server is running")});