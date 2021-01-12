const Discord = require('discord.js');

const data = require('./fish.json');

module.exports = {
    name: 'fish',
    description: 'Information about specific fish.',
    execute(message, args) {
        console.log(args);
        
        const allfish = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('A list of all the fishing conditions.')
            .setDescription('The * indicates on the lure that it is a required item.')
            .setTimestamp()
        
        const fishKeys = Object.keys(data);
        if (args.length !== 0) {
            if(args.every(val => fishKeys.includes(val))) {
                fishKeys = args;
               }
        }

        for (var i = 0; i < fishKeys.length; i++) {
            console.log(i);
            const curFish = data[fishKeys[i]];
            var retMessage = "Location: " + curFish["location"] + "\n";
            retMessage += "Lure: " + curFish["lure"] + "\n";
            retMessage += "Weather: " + curFish["weather"] + "\n";
            retMessage += "Requirements: " + curFish["requirements"] + "\n";
            allfish.addField(fishKeys[i],
                             retMessage);
        }

        message.channel.send(allfish);
    },
}