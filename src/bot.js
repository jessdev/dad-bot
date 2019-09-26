const Discord = require('discord.js');
var auth = require('./auth.json');
var api = require('./twitch-api');

const client = new Discord.Client();
console.log(api);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === '!get-streams') {
    var streams = api.getTop5Streams();
    console.log(streams);
    var message = "";
    var length = 5;
    for(var i = 0; i< length; i++){
      message = message + " "+ streams[i].name;
    }
    msg.reply(message);
  }

  if(msg.content === "@DotA"){
    msg.channel.send("The beacon has been lit, "+msg.author+" calls for aid.");
  }
});

client.on('message', msg => {
  if(msg.content === '!test') {
    msg.reply('This is a test.');
  }
});

client.login(auth.discord.token);
