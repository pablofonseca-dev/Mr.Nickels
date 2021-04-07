const { MessageEmbed } = require("discord.js");

module.exports = {
    "name": "guildMemberAdd",
    "description": "Event fired when the guildMemberAdd event fires.",
    "once": false,
    execute(client, ...args) {
        const [member] = args;
        const greetingsCategory = member.guild.channels.cache.find(category => category.name === '🎁Bienvenida');
        if (!greetingsCategory) return;
        const greetingsChannel = greetingsCategory.guild.channels.cache.find(channel => channel.name === '🎈┇bienvenida');
        if (!greetingsChannel) return;
        
        let totalGuildMembers = client.guilds.cache.filter(member => !member.bot).size;
        let embedGreetingMsg = new MessageEmbed();

        embedGreetingMsg.title = `Welcome to the server ${member.user.username}!`
        embedGreetingMsg.author = "Mr. Nickels";
        embedGreetingMsg.color = 0x91F159;
        embedGreetingMsg.description = `I hope you enjoy your stay`;
        embedGreetingMsg.addField(`Read the rules`, `Please, before you talk in any channel read the rules <#826989146974846976>`, false);
        embedGreetingMsg.addField(`Complete the reCAPTCHA!`, `Also, remember to complete the reCAPTHA sent by <@204255221017214977>. If you don't complete the reCAPTCHA that BOT is going to kick you`, false);
        embedGreetingMsg.addField(`Get your favorite roles`, `Get all your favorite roles in <#826690770597445632>`, false);
        embedGreetingMsg.addField(`How am I?`, `I am the first bot developed by the owner of the server`, false);
        embedGreetingMsg.setThumbnail(member.user.displayAvatarURL());
        embedGreetingMsg.addField(`With you we are a total of ${totalGuildMembers} members :partying_face:`);
        embedGreetingMsg.footer = {
            text: `Coding Kingdom 2021`, 
            iconURL: `${client.user.avatarURL()}`
        }
        embedGreetingMsg.setTimestamp = Date.now(); 
        console.log(member.user.displayAvatarURL());
        greetingsChannel.send(embedGreetingMsg);
    }
}
