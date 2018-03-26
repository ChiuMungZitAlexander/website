const path = require('path')
const express = require('express');
const http = require('http')

const app = express();
const router = express.Router()

app.use('/', express.static(path.resolve(__dirname, '../client')));

router.use(function timeLog (req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

router.get('', function (req, res) {
	res.redirect('/index')
});

router.get('index', function (req, res) {
	res.sendFile(path.resolve('client/view/index.html'));
})

const server = http.createServer(app).listen(80, 'localhost', function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log(`App listening at http://${host}:${port}`);
});