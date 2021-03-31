/**
 * *Say command is going to repeat what the user inputs. 
 */
module.exports = {
    "name": "say", 
    "description": "The bot should say what the user types", 
    execute(message, args){
        if(args.length == 0){
            message.reply(`I need more arguments to develop that operation`);
            return;
        }
        message.channel.send(args.join(' '));
    }
}