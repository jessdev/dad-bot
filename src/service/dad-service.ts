import { Client, Message } from "discord.js";

export class DadService {
    public registerDadService(client: Client){
        client.on('message', msg => {
            if(msg.content.toLowerCase() === "hi dad"){
              msg.reply("Hi sport! How your day?!?");
            }
            if(msg.content.toLowerCase().includes("how's mom")){
              msg.reply("Ah your mother's beautiful as always!");
            }
            // if(msg.content.toLocaleLowerCase().includes("where is mom")){
            //   msg.channel.send("...aye... you caught me sport. This has been hard for me. I've been putting a good face on but ultimately it's been difficult.")
            // }
            if(msg.content.toLowerCase().includes("tampon")) {
              msg.reply("Hold on dear! I'm off to the store! **leaves**");
            }
            if(this.checkMesssage(msg, "the lawn")) {
              msg.reply("I CAN'T HEAR YOU OVER THE MOWER? YOU WHAT?");
            }
            if(this.checkMesssage(msg, "grill")) {
              msg.reply("Burgers are almost done! **flips a burger and chuckles**");
            }
            if(this.checkMesssage(msg, "home depot")) {
              msg.reply("**Home depot theme starts playing**");
            }
            if(this.checkMesssage(msg, "play catch")){
              msg.reply("Go long spot!");
            }
            if(this.matchMesssage(msg, "I caught it")){
              msg.reply("Good job, sport!");
            }
            if(this.matchMesssage(msg, "I missed")){
              msg.reply("You'll get it next time, sport!");
            }
          });

          client.on('message', msg => {
            this.hiSport(msg);
          });
    }

    public hiSport(msg: Message) {
        let content = msg.content;
        let regex = /I'm a ([A-z]+)+|im ([A-z]+)|I'm ([A-z]+)/gi;
        let result = regex.exec(content);
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

    public checkMesssage(msg: Message, inside: string) {
      return msg.content.toLowerCase().includes(inside);
    }

    public matchMesssage(msg: Message, match: string) {
      return msg.content.toLowerCase() === match;
    }
}
