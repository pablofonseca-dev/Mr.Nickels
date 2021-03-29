'use strict';

const Discord = require('discord.js');
const client = new Discord.Client(); 
client.commands = new Discord.Collection(); 

const os = require('os');
const fs = require('fs');

const {token, prefix, commands_location, commands_extension} = require('./config.json');

const commandFiles = fs.readdirSync(commands_location).filter(file => file.endsWith(commands_extension));

for(const file of commandFiles){
    const commandObj = require(`${commands_location}/${file}`);
    client.commands.set(commandObj.name, commandObj);
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    
    if(msg.author.tag == client.user.tag || !msg.content.startsWith(prefix) || msg.author.bot) return;
    
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!(client.commands.has(command))) return;

    try{
        client.commands.get(command).execute(msg, args);
    }catch(command_error){
        msg.reply('There was a problem executing the command.');
    }
});

client.login(token); 