module.exports = {
    name: 'ping',
    description: 'Ping!',
    lvl: 'author',
    execute(message, args) {
        message.channel.send('Pong.');
    },
};