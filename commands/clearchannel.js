module.exports = {
	name: 'clearchannel',
	cooldown: 1,
	description: 'Clears selected channel',
	aliases: ['cc', 'resetchannel'],
	guildOnly: true,
	execute(message, args) {
		const channel = message.guild.channels.cache.find(r => r.name === args[0]);
		channel.delete()
			.then(message.guild.channels.create(args[0]));
	},
};