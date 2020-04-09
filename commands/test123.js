const fs  = require('fs');
const { chooseWeighted } = require('../functions.js');
const characters = require('../characters.json');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'test',
    description: "I'M GONNA TEEEEEEESSSSSSSSTTTTT",
    execute(message, args) {

        var data = JSON.parse(fs.readFileSync('./data/rolls.json'));
        var character = chooseWeighted(characters);


        if (data[message.guild.id] && data[message.guild.id][message.author.id] && data[message.guild.id][message.author.id].rollcount >= 2){
            return message.channel.send('You already rolled twice.')
        }

        if(!data[message.guild.id]) data[message.guild.id] = {};
        data[message.guild.id].servername = message.guild.name;

        if(!data[message.guild.id][message.author.id]) data[message.guild.id][message.author.id] = {"rollcount": 0};
        data[message.guild.id][message.author.id] = {
            "username": message.author.username,
            "character": character.name,
            "rollcount": data[message.guild.id][message.author.id] + 1
        };
        fs.writeFileSync('./data/rolls.json', JSON.stringify(data, null, 4));

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