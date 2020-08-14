import { Client, Message } from "discord.js";
import { MemeService, SwearService, DadService } from "./service/service-index";

const client = new Client();
const memeService = new MemeService();
const swearService = new SwearService(process.env.SWEARWORDS!);
const dadService = new DadService();

client.on('ready', () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

memeService.registerMemes(client);
dadService.registerDadService(client);
swearService.registerSwearService(client);

client.on('message', msg => {
  console.log(msg);
});

client.login(process.env.DISCORD_TOKEN!);
