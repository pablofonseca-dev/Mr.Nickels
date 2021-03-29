module.exports = {
    name: 'ping',
	description: 'When the user types Ping the bot should reply Pong',
	execute(message, args) {
		message.reply("Pong!");
	},
};
