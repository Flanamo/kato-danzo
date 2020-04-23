const fs  = require('fs');
const { chooseWeighted } = require('../functions.js');
const characters = require('../characters.json');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'luckchad',
    description: "I'M GONNA ROOOOOOOLLLLLLLLLLLLLLLLL",
    execute(message, args) {

        var data = JSON.parse(fs.readFileSync('./data/rolls.json'));
        var character = chooseWeighted(characters);


        if (data[message.guild.id] && data[message.guild.id][message.author.id] && data[message.guild.id][message.author.id].rollcount >= 2){
            return message.channel.send('You already rolled twice retardbro.')
        }

        if(!data[message.guild.id]) data[message.guild.id] = {};
        data[message.guild.id].servername = message.guild.name;

        if(!data[message.guild.id].characters) data[message.guild.id].characters = {};
        while(data[message.guild.id].characters[character.name]){
            character = chooseWeighted(characters);
        }

        if(!data[message.guild.id][message.author.id]) data[message.guild.id][message.author.id] = {"rollcount": 0};
        if(data[message.guild.id][message.author.id].rollcount > 0) delete data[message.guild.id].characters[data[message.guild.id][message.author.id].character];
        data[message.guild.id][message.author.id] = {
            "username": message.author.username,
            "character": character.name,
            "rollcount": data[message.guild.id][message.author.id].rollcount + 1
        };
        data[message.guild.id].characters[character.name] = true;
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