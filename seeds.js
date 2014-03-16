var mongoose = require('mongoose');
var Article = mongoose.model('Article');

Article.remove({}, function (error) {
	console.log("db being reset")
})

var first = new Article({
	title: "Abe to clone PolicyMic",
	body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOMnYfnoDOm2E9VZCYObNrZZdrYTnj21-7d-O8-FIBJ0m6CzHo"
})

var second = new Article({
	title: "PolicyMic to hire Abe",
	body: "....hopefully ",
	img:"http://m.c.lnkd.licdn.com/mpr/pub/image-QNz8859HiiBzZXqw-2dQ7JLpyII8XhOSzZzIsAiJy7gCBbaGQNzID7NHysyhBP1gGn4v/abraham-schonfeld.jpg"
})

var saveCb = function (error, Article) {
	if (error) {
		console.log("an error has occured")
	} else {
		console.log("saved")
	}
}

first.save(saveCb);
second.save(saveCb);