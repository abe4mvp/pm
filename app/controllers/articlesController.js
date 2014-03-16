var mongoose = require('mongoose');
var Article = mongoose.model('Article');

exports.init = function (app) {
	
	app.get('/', function (req, res) {
		Article.find(function (error, articles) {
			res.render("articles/index.ejs", { articles: articles })
		}) 
		
	});

	app.get('/articles/:id', function (req, res) {
		var articleId = req.params.id;
	
		var reqCookie = req.cookies.policy_mic || {};
		var readingList = reqCookie.readingList || [];
	
		if(readingList.indexOf(articleId) === -1) readingList.push(articleId);
		var resCookie = {readingList: readingList}
	
		res.cookie("policy_mic", resCookie)
		 	
		
		Article.findById(articleId, function (error, article) {
			res.render('articles/show.ejs', { article: article})
		});
		
	});

}
