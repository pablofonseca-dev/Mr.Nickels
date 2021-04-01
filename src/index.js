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
const {
        token,  
        commands_location, 
        events_location, 
        default_extension, 
        commands_module_location, 
        events_module_location
    } = require('./config.json');

/**
 * * Dynamic Directory Synchronous Reading For Command Handling. 
 * 
 * These lines of code are going to read file names in the bot commands directory and subdirectories
 * and is going to filter only the .js files storing them in a in-memory Discord Collection instance. 
 *
*/

const mainDirectories = fs.readdirSync(commands_module_location, {encoding: 'utf-8', withFileTypes: false});

mainDirectories.forEach(subdirectory => {
    let files = fs.readdirSync(`${commands_module_location}/${subdirectory}`, {encoding: 'utf-8', withFileTypes: false});
    files.forEach(file => {
        //Save each object returned from each .js file collected in the Discord.Collection() instance 
        const commandObj = require(`${commands_location}/${subdirectory}/${file}`);
        client.commands.set(commandObj.name, commandObj);
    })
});


/**
 * * Dynamic Directory Synchronous Reading For Event Handling. 
 * 
 * These lines of code are going to read file names in the bot events directory
 * and is going to filter only the .js files.
 *
*/

const eventFiles = fs.readdirSync(events_module_location).filter(file => file.endsWith(default_extension));

for(let eachEvent of eventFiles){
    const eventObj = require(`${events_location}/${eachEvent}`);
    if(eventObj.once){
        client.once(eventObj.name, (...args) => eventObj.execute(client, ...args));
        continue;
    }
    client.on(eventObj.name, (...args) => eventObj.execute(client, ...args));
}

client.login(token); 