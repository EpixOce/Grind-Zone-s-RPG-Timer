exports.run = (client, message, args) => {
 message.channel.send(`${message.author.username}` + " stabs " + `${message.mentions.random()});
};
