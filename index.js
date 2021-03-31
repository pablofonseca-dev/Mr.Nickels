'use strict';

/**
 * Server main dependencies. 
 */
const Discord = require('discord.js');
const client = new Discord.Client(); 
client.commands = new Discord.Collection(); 

const os = require('os');
const fs = require('fs');

/**
 * I created a config.json file to include sensitive data about the bot. 
 * !important: Without this file the bot is not going to work. 
 * *The config.json file returns a JSON Object for what I'm applying object destructuring to access
 * *the bot properties. 
 */
const {token, prefix, commands_location, commands_extension} = require('./config.json');

/**
 * This line of code is going to read the file names in the bot commands directory
 * and is going to filter only the .js files storing them in a collection.
 */
const commandFiles = fs.readdirSync(commands_location).filter(file => file.endsWith(commands_extension));

//Save each object returned from each .js file collected in the Discord.Collection() instance 
for(const file of commandFiles){
    const commandObj = require(`${commands_location}/${file}`);
    client.commands.set(commandObj.name, commandObj);
}

/**
 * *When the ready event is fired from the client instance is going execute the callback code.
 * !Nothing important 
 * TODO: Need to look for a special functionality that could be inside this event. 
 */
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

/**
 * *When the message event is fired from the client instance is going to execute the callback code. 
 */
client.on('message', message => {

    /**
     * A command handler for dynamic command execution. 
     */
    if(message.author.tag == client.user.tag || !message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!(client.commands.has(commandName))) return;

    try{
        client.commands.get(commandName).execute(message, args);
    }catch(command_error){
        message.reply('There was a problem executing the command.');
    }
});

client.login(token); 