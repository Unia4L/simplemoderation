module.exports = {
	name: 'myinfo',
	description: 'Displays Your Info!',
	cooldown: 60,
	execute(message) {
		message.channel.send(`Your Username: ${message.author.tag} \nYour ID: ${message.author.id}\nWhen you created your account: ${message.author.createdAt}\nYour avatar: ${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
	},
};