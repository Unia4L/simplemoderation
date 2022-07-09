module.exports = {
	name: 'clear',
	description: 'Clears messages in bulk!',
	guildOnly: true,
	aliases: ['prune', 'purge', 'del', 'delete'],
	cooldown: 20,
	execute(message, args) {
		const amount = parseInt(args[0]);
		if (isNaN(amount)) {
			return message.reply('Input a valid number.');
		}
		else if (amount < 1 || amount > 100) {
			return message.reply('You can only clear 1 - 100 messages at a time.');
		}
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('An Error Occured...');
		});
	},
};