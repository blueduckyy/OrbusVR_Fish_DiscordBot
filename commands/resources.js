const Discord = require('discord.js');

module.exports = {
    name: 'resources',
    description: 'Displays description of the locations',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Fishing Resources')
            .setDescription('Potatoes Interactive Map is still the #1 spot to find fishing information. Additionally watch this video: https://www.youtube.com/watch?v=onzaGavir_w')
            .setTimestamp()

            message.channel.send(exampleEmbed);
    },
}