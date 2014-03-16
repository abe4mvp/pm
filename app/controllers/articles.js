var mongoose = require('mongoose');
var Article = mongoose.model('Article');

exports.init = function (app) {
	
	app.get('/', function (req, res) {
		res.send('hello World!')
	});

	app.get('/articles/:id', function (req, res) {
		var articleId = req.params.id;
	
		var reqCookie = req.cookies.policy_mic || {};
		var readingList = reqCookie.readingList || [];
	
		if(readingList.indexOf(articleId) === -1) readingList.push(articleId);
		var resCookie = {readingList: readingList}
	
		res.cookie("policy_mic", resCookie)
		 	
		var article = {article: {
			title: "Abe to clone policy mic",
			body: "in progress now"
		}}
		
		// var article = Article.findById(articleId);
		res.render('articles/show.html.ejs', article)
	});

}
