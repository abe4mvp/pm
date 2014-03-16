exports.init = function (app) {
	app.get('/search', function (req, res) {
		var q = req.query.q
		res.send("You are looking articles about for: " + q)
	})
}


