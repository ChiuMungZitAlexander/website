const path = require('path')
const express = require('express');
const http = require('http')

const app = express();
const router = express.Router()

app.use('/', express.static(path.resolve(__dirname, '../client')));

app.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

app.get('/', function (req, res) {
	res.redirect('/index');
});

app.get('/index', function (req, res) {
	res.sendFile(path.resolve('client/view/index.html'));
});

const server = http.createServer(app).listen(3000, 'localhost', function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log(`App listening at http://${host}:${port}`);
});