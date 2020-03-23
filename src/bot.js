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
    for (var i = 0; i < length; i++) {
      message = message + " " + streams[i].name;
    }
    msg.reply(message);
  }

  if (msg.content === "@DotA") {
    msg.channel.send("The beacon has been lit, " + msg.author + " calls for aid.");
  }

  findSwearWords(msg);
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

function findSwearWords(msg) {
  var content = msg.content.toLowerCase();
  if (content.includes("fuck")) {
    msg.reply("Woa there champ. There's no need for F-bombs");
  } else if (content.includes("shit") || content.includes("ass")) {
    msg.reply("Hey now, that's not a good word to use there champ.");
  } else if (content.includes("cunt")) {
    if (msg.author.username == "Kai") {
      msg.reply("Oh. Alright. You're from Australia. I guess I'll let it slide.")
    } else {
      msg.reply("Only Kai can use that word.");
    }
  } else if (content.includes("damn")) {
    msg.reply("Hey sport. Dams are for beavers. Okay?");
  } else if (content.includes("dick") || content.includes("weiner")) {
    msg.reply("I guess we're going to have to settle down for 'the talk' if you keep askin'.");
  } else if (content.includes("frick")) {
    msg.reply("son. I'll have you know this is a Christian Minecraft Server.")
  } else if (content.includes("doo") || content.includes("poo")) {
    msg.reply(" you sure do have a potty mouth, boy.");
  } else if (content.includes("stupid")) {
    msg.reply(":neutral_face:");
  }
}


function hiSport(msg) {
  //console.log("hi sport");
  //console.log(msg);
  var content = msg.content;
  var regex = /I'm a ([A-z]+)+|im ([A-z]+)|I'm ([A-z]+)/g;
  var result = regex.exec(content);
  //console.log(result);
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
