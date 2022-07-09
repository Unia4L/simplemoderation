module.exports = {
	name: 'userinfo',
	cooldown: 10,
	description: 'Displays User Info!',
	execute(message, args) {
		if (args.length < 1) { return message.channel.send(`Please provide a user ${message.author}`); }
		if (!message.mentions.users.size) {
			return message.channel.send(`Please provide a valid user ${message.author}`);
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`Their Username: ${taggedUser.tag} \nTheir ID: ${taggedUser.id}\nWhen They created your account: ${taggedUser.createdAt}\nTheir avatar: ${taggedUser.displayAvatarURL({ format: 'png', dynamic: true })}`);
	},
};