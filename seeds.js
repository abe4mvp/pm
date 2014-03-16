var mongoose = require('mongoose');
var Article = mongoose.model('Article');

var first = new Article({
	title: "Abe to clone PolicyMic",
	body: "in progress now"
})

var second = new Article({
	title: "PolicyMic to hire Abe",
	body: "....hopefully"
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