import * as fs from 'fs';
import { Client, Message } from 'discord.js';

export class SwearService {
    private badWordList: string[];
    private defaultResponses: string[];
    constructor(private swearWords: string){
        this.badWordList = fs.readFileSync(swearWords, 'utf8').split(",");
        this.defaultResponses = [
            "son, I am dissapointed in you",
            "what would your mother think of talk like that?",
            "you really should watch your language.",
            "you break my heart everytime you use language like that.",
            "now listen here, sport.",
            "mind your ps and qs there, champ.",
            "I'm going to have to talk to your mother about your behavior.",
            "Hey now, that's not a good word to use there champ."
        ];
    }

    public registerSwearService(client: Client){
        client.on('message', msg => {
            this.findSwearWords(msg);
          });
    }

    public findSwearWords(msg: Message) {
        var content = msg.content.toLowerCase();
        if (content.includes("fuck")) {
            msg.reply(" Woa there champ. There's no need for F-bombs");
        } else if (content.includes("cunt")) {
            if (msg.author.username == "Kai") {
                msg.reply("Oh. Alright. You're from Australia. I guess I'll let it slide.")
            } else {
                msg.reply("**Shakes head very sadly**");
            }
        } 
        else if (content.includes("damn")) {
            msg.reply(" Hey sport. Dams are for beavers. Okay?");
        } else if (content.includes("dick") || content.includes("weiner")) {
            msg.reply(" I guess we're going to have to settle down for 'the talk' if you keep askin'.");
        } else if (content.includes("frick")) {
            msg.reply(" son. I'll have you know this is a Christian Minecraft Server.")
        } else if (content.includes("doo") || content.includes(" poo")) {
            msg.reply(" you sure do have a potty mouth, boy.");
        } else if (content.includes("stupid")) {
            msg.reply(":neutral_face:");
        } else if (content.includes("horse cock")) {
            msg.reply(" Did mom let you see my phone?");
        } else {
            let yesBad = false;
            this.badWordList.forEach(element => {
                if(content.includes(element)){ yesBad = true;}
            });
            if(yesBad){
                msg.reply(this.generateReply());
            }
        }
    }

    public generateReply() {
        var rand = Math.floor((this.defaultResponses.length - 1) * Math.random());
        return this.defaultResponses[rand];
    }
}
