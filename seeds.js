var mongoose = require('mongoose');
var Article = mongoose.model('Article');

Article.remove({}, function (error) {
	console.log("db being reset")
})

var seeds = [

new Article({
	title: "Abe is Learning node",
	body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	img: "http://nodejs.org/images/logos/nodejs-1280x1024.png"
}),

new Article({
	title: "Simple PolicyMic clone created using Node/express",
	body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOMnYfnoDOm2E9VZCYObNrZZdrYTnj21-7d-O8-FIBJ0m6CzHo"
}),

new Article({
	title: "PolicyMic to hire Abe?",
	body: "....hopefully ",
	img:"https://1.gravatar.com/avatar/e9532893b2dc8a5a57d77d839a646e3b?d=https%3A%2F%2Fidenticons.github.com%2F6d518885f8938c48cc75aa8a4b6bdb49.png&r=x&s=460"
})
]



var saveCb = function (error, Article) {
	if (error) {
		console.log("an error has occured")
	} else {
		console.log("saved")
	}
}

seeds.forEach(function (article) {
	article.save(saveCb);
})
