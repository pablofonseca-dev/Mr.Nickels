module.exports = {
    "name": "say", 
    "description": "The bot should say what the user types", 
    execute(message, args){
        console.log(args);
        message.channel.send(args.join(' '));
    }
}