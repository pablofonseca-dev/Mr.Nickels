'use strict';

const Discord = require('discord.js');
const client = new Discord.Client(); 
const os = require('os');
const dotenv = require('dotenv').config({path: '.env', encoding: 'utf-8'});

if(dotenv.error){
    throw dotenv.error;
}

console.log(dotenv.parsed);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content == '$ping'){
        msg.reply('Pong!');
    }
});

console.log(process.env.TOKEN);

client.login(process.env.TOKEN);