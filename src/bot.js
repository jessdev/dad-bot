const Discord = require('discord.js');
var auth = require('./auth.json');
var swearService = require('./swear-service.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.indexOf("!familiar") > -1){
    msg.channel.send("[sad wizard noises]");
  }
  else if (msg.content.indexOf("!troll") > -1){
    msg.channel.send("And then, all the trolls died from network connectivity issues.");
  }
  else if(msg.content.indexOf("do it") > -1){
    msg.channel.send("I didn't ask how big the room is. I said I cast fireball.");
  }
});

client.on('message', msg => {
  if (msg.content === "@DotA") {
    msg.channel.send("The beacon has been lit, " + msg.author + " calls for aid.");
  }
});

client.on('message', msg => {
  swearService.findSwearWords(msg);
  hiSport(msg);
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === "hi dad"){
    msg.reply("Hi sport! How your day?!?");
  }
  if(msg.content.toLowerCase().includes("how's mom")){
    msg.reply("Ah your mother's beautiful as always!");
  }
  if(msg.content.toLocaleLowerCase().includes("where is mom")){
    msg.channel.send("...aye... you caught me sport. This has been hard for me. I've been putting a good face on but ultimately it's been difficult.")
  }
});

client.on('message', msg => {
  console.log(msg);
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

client.login(auth.discord.token);
