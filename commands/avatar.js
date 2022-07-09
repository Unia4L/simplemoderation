module.exports = {
	name: 'avatar',
	cooldown: 10,
	aliases: ['icon', 'pfp', 'profilepic', 'profilepicture', 'img', 'image'],
	description: 'Displays Users Avatar',
	execute(message, args) {
		if (args.length < 1) { return message.channel.send(`Please provide a user ${message.author}`); }
		if (!message.mentions.users.size) {
			return message.channel.send(`Please provide a valid user ${message.author}`);
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`${taggedUser.displayAvatarURL({ format: 'png', dynamic: true })}`);
	},
};
