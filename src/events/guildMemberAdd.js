module.exports = {
    "name": "guildMemberAdd", 
    "description": "Event fired when the guildMemberAdd event fires.",
    "once": false,
    execute(client, ...args){
        const [member] = args;
        const greetingsCategory = member.guild.channels.cache.find(category => category.name === '🎁Bienvenida');
        if(!greetingsCategory) return; 
        const greetingsChannel = greetingsCategory.guild.channels.cache.find(channel => channel.name === '🎈┇bienvenida');
        if(!greetingsChannel) return;
        greetingsChannel.send(`Hello user, ${member}`);
    }
}
