var fs = require('fs');

var badWordList = fs.readFileSync("./src/badwords.txt", {encoding: 'UTF8' }).split(",");

const defaultResponses = [
    " son, I am dissapointed in you",
    " what would your mother think of talk like that?",
    " you really should watch your language.",
    " you break my heart everytime you use language like that.",
    " now listen here, sport."
];

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
    } else {
        let yesBad = false;
        badWordList.forEach(element => {
            if(content.includes(element)){ yesBad = true;}
        });
        if(yesBad){
            msg.reply(generateReply());
        }
    }
}

function generateReply() {
    var rand = Math.floor((defaultResponses.length - 1) * Math.random());
    return defaultResponses[rand];
}

module.exports = {
    findSwearWords: findSwearWords
};
