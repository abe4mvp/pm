var express = require('express');
var app =  express();

app.get('/', function (req, res) {
	res.send('hello World!')
})

app.get('/articles/:id', function (req, res) {
	var article_id = req.params.id;
	res.send("You are viewing article number: " + article_id)
})

app.get('/search', function (req, res) {
	var q = req.query.q
	res.send("You are looking articles about for: " + q)
})

app.listen(3000);
console.log("listening")