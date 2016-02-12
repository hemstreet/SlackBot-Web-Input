var config = require('./config/config'),
    SlackBot = require('./lib/SlackBot');

var slackBot = new SlackBot(config);

slackBot.sendMessage('random', {"a":"b"});
