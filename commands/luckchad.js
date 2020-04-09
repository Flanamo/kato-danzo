const { chooseWeighted } = require('../functions.js');
const characters = require('../characters.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'luckchad',
    description: 'IM GONNA ROLLLLLLLL',
    aliases: ['roll'],
    execute(message, args) {
        var character = chooseWeighted(characters);

        if (character.name === 'Ichigo Kurosaki'){
            return message.channel.send('You rolled... **Ichigo Kurosaki** from Bleach! \n https://www.youtube.com/watch?v=1lsn2tT5yTc')
        }

        let embed = new MessageEmbed()
            .setAuthor('You rolled...')
            .setColor('#fcabba')
            .setTitle(character.name)
            .setImage('https://kitsunes.moe/mugen/' + character.image)
            .setURL(character.url)
            .setDescription(`From ${character.source}`)
            .setFooter('The source & image may not be fully accurate, ask Tamamo#0001 to fix it.','https://cdn.discordapp.com/emojis/585823303772667904.png?v=1');


        message.channel.send(embed);
    },
};