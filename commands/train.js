const Discord = require('discord.js');
const fetch = require('node-fetch');


async function getServerTime() {
    const { hour, minutes } = await fetch('http://api-reborn.orbusvr.com/servertime')
        .then(response => response.json())
    console.log(hour);
    console.log(minutes);
    return hour;
}


module.exports = {
    name: 'train',
    description: 'Choo Choo!!!!! Public Event Train',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Public Event Train... coming soon')
            .setImage('https://media.giphy.com/media/lGw9YbzP2vkje/giphy.gif')

        message.channel.send(exampleEmbed);
    },
}