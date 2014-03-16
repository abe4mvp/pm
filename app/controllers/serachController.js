var mongoose = require('mongoose');
var Article = mongoose.model('Article');

exports.init = function (app) {
	app.get('/search', function (req, res) {
		var q = req.query.q
		Article.find({ body: new RegExp(q, 'i') }, function (error, articles) {
			if (error) {
				res.send("No results found");
			} else {
				res.render("articles/index.html.ejs", { articles: articles });
			}
		})
	})
}


