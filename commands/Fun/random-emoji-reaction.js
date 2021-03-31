const shuffle = require('../../helpers/array-shacker'); 
module.exports = {
    "name": "random-react",
    "description": "The bot is going to react with random emojis from a specific message",
    execute(message, args){
        let fruits = ['watermelon', 'mango', 'pineapple', 'apple', 'melon', 'orange'];
        message.reply(`First: ${fruits} \n Then: ${shuffle(fruits)}`);
        message.reply();       
    }
}