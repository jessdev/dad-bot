const Discord = require('discord.js');
var auth = require('./auth.json');
var api = require('./twitch-api');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(auth.discord.token);
