const characters = require('../characters.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'search',
    description: 'Search & view a character.',
    args: 'true',
    usage: '(character name)',
    execute(message, args) {
        var character = characters.find(n => n.name.toLowerCase().includes(args.join(" ").toLowerCase()));

        if( character ===  undefined){
            return message.channel.send("Bro that's not a character...");
        }

        if (character.name === 'Ichigo Kurosaki'){
            return message.channel.send("No cheating sir, you'll have to roll him.")
        }

        let embed = new MessageEmbed()
            .setColor('#fcabba')
            .setTitle(character.name)
            .setImage('https://kitsunes.moe/mugen/' + character.image)
            .setURL(character.url)
            .setDescription(`From ${character.source}`)
            .setFooter('The source & image may not be fully accurate, ask Tamamo#0001 to fix it.','https://cdn.discordapp.com/emojis/585823303772667904.png?v=1');

        message.channel.send(embed);

    },
};