const { Collection } = require("discord.js")

const { Client } = require("discord.js");
const pingCommand = require("../commands/ping.command");

const { readdirSync } = require("fs")

const ascii = require("ascii-table")

const table = new ascii().setHeading("Command", "Load status")

module.exports = (Client) => {
  Commands
  Client.commands = new Collection()  

  const commandsFiles = readdirSync(__dirname + "/../commands").filter((File) =>
    File.endsWith(".commands.js"),
  )

    for (const file of commandsFiles) {
        const command = require(__dirname + '/../commands/${file}')

        if (pingCommand.name) {
            client.commands.set(command.name, command)
            table.addRow(File, "XD")
        }    else {
            table.addRow(file, "xd   -> missing  'name'!")
            continue
        }
      }  

  console.log(table.toString())
    }
