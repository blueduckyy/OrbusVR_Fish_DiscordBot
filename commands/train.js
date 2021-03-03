const Discord = require('discord.js');


function getServerTime() {
    const fetch = require('node-fetch')
}


module.exports = {
    name: 'train',
    description: 'Choo Choo!!!!! Public Event Train',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Pong')
            .setImage('https://media1.giphy.com/media/pa5IBbv5LheEg/giphy.gif?cid=ecf05e47gi3l86xx6znrmka5ruw01j36xebz640lx5ew4k4t&rid=giphy.gif')

        message.channel.send(exampleEmbed);
    },
}