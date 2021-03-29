/**
 * *Say command is going to repeat what the user inputs. 
 */
module.exports = {
    "name": "say", 
    "description": "The bot should say what the user types", 
    execute(message, args){
        message.channel.send(args.join(' '));
    }
}