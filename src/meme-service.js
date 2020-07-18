
function registerMemes(client){
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
        else if(msg.content.toLowerCase().includes("!torch")){
          msg.channel.send("THE TORCH. GIVE EM THE TORCH");
        }
      });
}

module.exports = {
    registerMemes: registerMemes
};