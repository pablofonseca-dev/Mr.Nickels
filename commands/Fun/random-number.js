const getRandomInt = require('../../helpers/get-random-int'); 
module.exports = {
    "name": "random",
    "description": "The bot is going to reply with a random number",
    execute(message, args){
        let maxInt = 0;
        try{
            maxInt = parseInt(args[0]);
            if(typeof(maxInt) != 'number' || isNaN(maxInt)) throw new error(); 
        }catch(error){
            message.reply(`The argument that you passed is not a number.`);
            return;
        }
        message.reply(`Random number: ${getRandomInt(0, maxInt)}`);       
    }
}