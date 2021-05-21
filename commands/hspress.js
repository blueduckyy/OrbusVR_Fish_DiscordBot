const Discord = require('discord.js');
var fs = require('fs');
var path = require('path');
var hspresspics = [];

function getLancePic() {
    const image = fs.readFileSync(path.join(__dirname, '/hspress/final1.png'));
    return image;
}

module.exports = {
    name: 'hspress',
    description: 'The highsteppe press may be gone but not forgotten!',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FD7AAC')
            .setTitle('Highsteppe Press Archives')
            .setImage(getLancePic())
            .setTimestamp()

        message.channel.send(exampleEmbed);
    },
}