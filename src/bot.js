const Discord = require('discord.js');
var auth = require('./auth.json');
var swearService = require('./swear-service.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {

  if (msg.content === "@DotA") {
    msg.channel.send("The beacon has been lit, " + msg.author + " calls for aid.");
  }

  swearService.findSwearWords(msg);
  hiSport(msg);
});

client.on('message', msg => {
  if (msg.content === '!test') {
    msg.reply('This is a test.');
  }
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === "hi dad"){
    msg.reply("Hi sport! How your day?!?");
  }
});

function hiSport(msg) {
  var content = msg.content;
  var regex = /I'm a ([A-z]+)+|im ([A-z]+)|I'm ([A-z]+)/gi;
  var result = regex.exec(content);
  if (result !== null) {
    var whoAmi = "";
    if (result[1] !== undefined) {
      whoAmi = result[1];
    }
    if (result[2] !== undefined) {
      whoAmi = result[2];
    }
    if (result[3] !== undefined) {
      whoAmi = result[3];
    }
    if (whoAmi != "Dad") {
      msg.channel.send("Hi " + whoAmi + "! I'm Dad!");
    }
  }
}
//dick penis suck butt ass darn shit

client.login(auth.discord.token);
