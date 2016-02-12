var request = require('request');

var Request = function(config) {
    this.config = config;
};

// "channel": "#random",
// "username": "webhookbot",
// "text": "This is posted to #random and comes from a bot named webhookbot.",
// "icon_emoji": ":ghost:"

Request.prototype.post = function(room, data) {


    request.post(
        this.config.webHooks[room],
        {
            payload: {
                "text": "A very important thing has occurred! <https://alert-system.com/alerts/1234|Click here> for details!"
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
};

module.exports = Request;

