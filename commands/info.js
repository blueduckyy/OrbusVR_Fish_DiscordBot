const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'General info on the bot.',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Welcome to Duckyys Pond!')
            .setDescription('This was created because Potato and Rickness did a ton of awesome work and created a map. However some of do not have PCs and cannot use said map. He then divulged such secret information in this post: https://community.orbusvr.com/t/spoiler-legendary-fish-explained/21695. \n Thank you Potato!! \n \n This bot will provide you some basic information about when/ where legendary fish are available. It is currently in progress and will be updated. A list of the commands can be found here.')
            .addFields(
                { name: '!info', value: 'Pulls up this page' },
                { name: '!current', value: 'Shows where current legendary fish are' },
                { name: '!fish', value: 'Provide you conditions/ lures needed for this fish.'},
                { name: '!location', value: 'A map showing the locations labeled.'},
            )
            .setTimestamp()

            message.channel.send(exampleEmbed);
    },
}