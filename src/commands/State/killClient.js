module.exports = {
    "name": "turnOff", 
    "description": "Kills the bot", 
    execute: async (client, message, ...args) => {
        await client.destroy(); 
    }
}
 