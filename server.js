var express = require('express');
var app =  express();

app.use(express.cookieParser());
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
	res.send('hello World!')
})

app.get('/articles/:id', function (req, res) {
	var article_id = parseInt(req.params.id);
	
	var reqCookie = req.cookies.policy_mic || {};
	var readingList = reqCookie.readingList || [];
	
	if(readingList.indexOf(article_id) === -1) readingList.push(article_id);
	var resCookie = {readingList: readingList}
	
	res.cookie("policy_mic", resCookie)
	
	var article = {article: {
		title: "Abe to clone policy mic",
		body: "in progress now"
	}}
	res.render('articles/show.html.ejs', article)
})

app.get('/search', function (req, res) {
	var q = req.query.q
	res.send("You are looking articles about for: " + q)
})

app.listen(3000);
console.log("listening")