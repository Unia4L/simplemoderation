module.exports = {
	name: 'serverinfo',
	description: 'Displays Server Info!',
	cooldown: 10,
	guildOnly: true,
	execute(message) {
		message.channel.send(`The server name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nThe server region is ${message.guild.region}`);
		const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === '559522356801044512';
		message.awaitReactions(filter, { time: 15000 })
			.then(collected => console.log(`Collected ${collected.size} reactions`))
			.catch(console.error);
	},
};