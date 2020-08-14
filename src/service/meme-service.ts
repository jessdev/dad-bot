import { Client, Message } from "discord.js";

export class MemeService {
    public registerMemes(client: Client) {
        client.on("message", (msg: Message) => {
            if (msg.content.indexOf("!familiar") > -1) {
                msg.channel.send("[sad wizard noises]");
            }
        });
    
        client.on("message", (msg: Message) => {
            if (msg.content.indexOf("!troll") > -1) {
                msg.channel.send("And then, all the trolls died from network connectivity issues.");
            }
        });
    
        client.on("message", (msg: Message) => {
            if (msg.content.indexOf("do it") > -1) {
                msg.channel.send("I didn't ask how big the room is. I said I cast fireball.");
            }
        });
    
        client.on("message", (msg: Message) => {
            if (msg.content.toLowerCase().includes("!torch")) {
                msg.channel.send("THE TORCH. GIVE EM THE TORCH");
            }
        });

        client.on('message', msg => {
            if (msg.content === "@DotA") {
              msg.channel.send("The beacon has been lit, " + msg.author + " calls for aid.");
            }
          });
    }
}
