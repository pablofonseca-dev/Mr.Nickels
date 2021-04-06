const shuffle = require('../../helpers/array-shacker'); 
//const Discord = require('discord.js');
module.exports = {
    "name": "random-react",
    "description": "The bot is going to react with random emojis from a specific message",
    execute(client, message, args){
        let availableEmojis = client.emojis.cache;  
        let emojiNameCollection = [];
        availableEmojis.forEach(emoji => console.log(emoji.name));
    }
}