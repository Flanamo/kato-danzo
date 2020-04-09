const fs  = require('fs');

module.exports = {
    name: 'list',
    description: 'list all characters',
    execute(message) {
        const characters = JSON.parse(fs.readFileSync('./characters.json'));
        const characterString = characters
            .map(character => `${character.name} from ${character.source}`)
            .join('\n');
        message.channel.send({
            files: [
                { attachment: Buffer.from(characterString), name: 'characters.txt' }
            ]
        });
    },
};