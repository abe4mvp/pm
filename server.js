var express = require('express');
var app =  express();

require('./config.js').init(app);

var mongoose = require('mongoose')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db failed to connect'));
mongoose.connect('mongodb://localhost/test')

var fs = require('fs');

var modelPath = './app/models/';
var models = fs.readdirSync(modelPath);
models.forEach(function (model) {
	require(modelPath + model)
})

var controllerPath = './app/controllers/'
var controllers = fs.readdirSync(controllerPath);
controllers.forEach(function (controller) {
  var controller = require(controllerPath + controller);
  controller.init(app);
});

// require('./seeds.js')








app.listen(3000);
console.log("Initalized Policy Mic")