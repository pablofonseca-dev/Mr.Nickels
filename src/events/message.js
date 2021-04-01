/**
 * *When the message event is fired from the client instance is going to execute the callback code. 
 */
module.exports = {
    "name": "message", 
    "description: ": "Handles the message event.", 
    "once": false, 
    execute: (client, ...args) => {
            const [message] = args; 
            const {prefix} = require('../config.json');
            /**
                * A command handler for dynamic command execution. 
            */
            if(message.author.tag == client.user.tag || !message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

            const commandArgs = message.content.slice(prefix.length).trim().split(/ +/);
            const commandName = commandArgs.shift().toLowerCase();

            if(!(client.commands.has(commandName))) return;

            try{
                client.commands.get(commandName).execute(client, message, commandArgs);
            }catch(command_error){
                message.reply('There was a problem executing the command.');
            }
    } 
}
