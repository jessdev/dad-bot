# Dad Bot
A bot to dad your server.

## Notes on Dependencies
* latest version of node - [node.js](https://nodejs.org/en/)

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
Create an configuration file called .env using the following fields/values:
```json
DISCORD_TOKEN=<token>
SWEARWORDS=badwords.txt
```
1. `npm install`
2. `npm run start`

### Running Locally for testing
The application loads environment variables to load secrets and settings.
create powershell env variables:
```powershell
C> $env:DISCORD_TOKEN = "token"
C> $env:SWEARWORDS = "path/to/file.txt"
```

## Running Docker Container
```
docker run --env-file .\.env <your-tag>
```
 