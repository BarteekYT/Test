const chalk = require("chalk")

const { Client, RichEmbed } = require("discord.js")
const client = new Client()
const args = "msg.content"
const cmd = "args.shift().toLowerCase()"

// const { token, prefix } = require("./config/config.js")

const log = console.log

// Initalize command handler
// commandsHandler(client)

const commandsHandler = require("./handlers/command.handler")

client.on("ready", () => {
  log(chalk.green(`Zalogowano jako ${client.user.tag}!`))
})

client.on("message", msg => {
  log(msg.content, msg.author.tag)
  const { author, prefix, channel } = msg

  if (msg.content === "$ping") {
    msg.reply("pong")
  }
  
  if (msg.content === "$info") {
    const botAuthor = "BartekYT"
    const botVersion = "v1.0"
    const botName = "DiscordBot"
    const botDescription = "Bot który daje możliwość zjedzenia pietruszki chyba XD"

    const embed = new RichEmbed()
    // set the title of the field
    .setTitle(botName)
    // set the color of the embed
    .setColor(0xb348ff)
    // set the main content of the embed
    .setDescription(botDescription)
    .addField("Autor", botAuthor, true)
    .addField("Wersja", botVersion, true)

    channel.send(embed)
  } 
})

client.login("ODE4MTI1NTk2NDQ1NjM4NzA4.YETg1g.OswUOpRWi9JE1rVEZY4C17LHldo")

// Error handler - omit srasched
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})