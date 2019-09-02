var Discord = require('discord.io');
var auth = require('./auth.json');
var api = require('./twitch-api');


console.log(auth.discord.token);
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.discord.token,
   autorun: true
});

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});

function responseHandler(customHandle){
    return (error, response)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log(response);
        if(customHandle != null){
            return customHandle(response);
        }
    }
}