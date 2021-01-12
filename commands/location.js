const Discord = require('discord.js');

module.exports = {
    name: 'location',
    description: 'Displays description of the locations',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Fishing Locations')
            .setDescription('Again Potato has come through with an awesome map. For Hulthines/ Rainforest the map is color coded to display regional differences. This is a labeled static version of the map')
            .attachFiles(['./commands/Overworld.png'])
            .setImage('attachment://Overworld.png')
            .setTimestamp()

            message.channel.send(exampleEmbed);
    },
}