const Discord = require('discord.js');
var fs = require('fs');
var potatopics = [];


fs.readFile('./commands/potato.txt', function(err, data) {
    if(err) throw err;
    potatopics = data.toString().split("\n");
});


function getPotatoPic() {
    var curValue = curValue = Math.floor(Math.random()*potatopics.length);
    return potatopics[curValue];
}

module.exports = {
    name: 'potato',
    description: 'Potato!!',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#602D23')
            .setTitle('Potato!')
            .setImage(getPotatoPic())
            .setTimestamp()

        message.channel.send(exampleEmbed);
    },
}