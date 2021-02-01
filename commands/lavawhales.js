const Discord = require('discord.js');
var fs = require('fs');

module.exports = {
    name: 'lavawhale',
    description: 'Random Lavawhale Picture',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Lavawhale')
            .setImage("https://images-ext-2.discordapp.net/external/rK8qvEVM-iw5vZRfSokUPpSShpR6bCjvElJvHz70kTI/https/images-ext-1.discordapp.net/external/cDDheScpFvvXCGDX67Szj4GNUsi8t9FlLDGVkotBPwQ/https/i.imgur.com/r01acBb.png?width=1410&height=1278")
            .setTimestamp()

        message.channel.send(exampleEmbed);
    },
}