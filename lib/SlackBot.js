var Request = require('./Request');

var SlackBot = function(config) {
    this.config = config;
    this.request = new Request(config);
};

SlackBot.prototype.sendMessage = function(room, message) {
    this.request(room, message);
};


module.exports = SlackBot;