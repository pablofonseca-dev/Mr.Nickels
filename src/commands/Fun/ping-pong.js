/**
 * *Ping command is going to reply "Pong" when the user says "Ping".
 */
module.exports = {
    name: 'ping',
	description: 'When the user types Ping the bot should reply Pong',
	execute(client, message, args) {
		message.reply("Pong!");
	},
};
