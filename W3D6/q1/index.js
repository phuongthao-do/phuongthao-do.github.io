const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'css')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
	const date = new Date();
	res.render("index", {
		time: date.toTimeString(),
	});
});
app.listen(3000, () => {console.log("q1 server is running")});