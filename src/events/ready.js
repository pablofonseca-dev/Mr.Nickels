/**
 * *When the ready event is fired from the client instance is going execute the callback code.
 * !Nothing important 
 * TODO: Need to look for a special functionality that could be inside this event. 
 */
module.exports = {
    "name": "ready", 
    "description": "Handles the ready event", 
    "once" : true,  
    execute: (client, ...args) => {
        console.log(`Logged in as ${client.user.tag}!`);
    }
}
 