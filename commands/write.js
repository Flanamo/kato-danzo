//  This was purely made for Tamamo to figure out how to write to a json
//
// const fs  = require('fs');
// const { chooseWeighted } = require('../functions.js');
// const characters = require('../characters.json');
//
//
//
// module.exports = {
//     name: 'write',
//     description: 'IM GONNA WRIIIITE',
//     execute(message) {
//
//         var data = JSON.parse(fs.readFileSync('./data/rolls.json'));
//         var character = chooseWeighted(characters);
//
//         if(!data[message.guild.id]) data[message.guild.id] = {};
//         data[message.guild.id].servername = message.guild.name;
//         data[message.guild.id][message.author.id] = {
//         "username": message.author.username,
//         "character": character.name,
//         "rollcount": 1
//         };
//         fs.writeFileSync('./data/rolls.json', JSON.stringify(data, null, 4));
//         message.channel.send('Saved ur roll bitch.')
//     }
// };