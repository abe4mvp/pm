var mongoose = require('mongoose');
var Article = mongoose.model('Article');

exports.init = function (app) {
	app.get('/search', function (req, res) {
		var q = req.query.q
		Article.find({ title: new RegExp(q, 'i') }, function (error, articles) {
			if (error) {
				res.send("No results found");
			} else {
				if (articles.length > 0){
					res.render("articles/searchResults.ejs", { articles: articles });
				} else {
					res.send("Sorry, no results matching your query")
				}
			}
		})
	})
}


