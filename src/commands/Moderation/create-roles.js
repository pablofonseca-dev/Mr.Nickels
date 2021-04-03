module.exports = {
    "name": "bump-role", 
    "description": "Create a new role set by the user", 
    "once" : true,  
    execute: (client, message, args) => {
        const guildObj = message.guild; 
        const rolesManager = guildObj.roles; 
        const [roleName, roleColor, roleReason] = args; 
        if(args.length == 0){
            message.reply("This command needs at least one argument.");
            return; 
        }
        
        rolesManager.create({
            data: {
                name: roleName,
                color: roleColor
            }, 
            reason: roleReason
          })
            .then(() => {
                message.reply(`Role ${roleName} created!`);
            })
            .catch(console.error);
    }
}