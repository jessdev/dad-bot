# Dad Bot
A bot to dad your server.

## Notes on Dependencies
Current version of discord.io uses a depicated [package](https://github.com/renesansz/discord-greeter-bot/issues/44)

### Discord.js
See [discord js](https://discord.js.org/?source=post_page---------------------------#/docs/main/stable/general/welcome) for documentation


## Connecting To Discord
See this [link](https://github.com/jagrosh/MusicBot/wiki/Adding-Your-Bot-To-Your-Server) for connecting the bot to a server

## Running the Applications
Create a comma seperated badwords.txt file in the source folder.  
Example:
```
wordone,wordtwo,wordthree
```
Create an authentiation file using the following json:
```json
{
    "discord":{
        "token": "your token here"
    }
}
```
1. `npm install`
2. `npm run run`
