var config = require('./config/config');
var bodyParser = require('body-parser');
var Slack = require('node-slackr');

var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/index.html');
});

app.post('/', function (req, res) {

    var slack = new Slack(config.webHook, {
        channel: req.body.destination,
        username: req.body.username || "Arrow Bot",
        icon_emoji: req.body.emoji || ":ghost:"
    });
    slack.notify(req.body.message);
    res.sendFile(__dirname + '/view/index.html');
});


console.log("Server is running on http://localhost:3000");
app.listen(3000);