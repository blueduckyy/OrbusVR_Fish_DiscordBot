const Discord = require('discord.js');
var fs = require('fs');
var booppics = [];


fs.readFile('./commands/boop.txt', function(err, data) {
    if(err) throw err;
    booppics = data.toString().split("\n");
});


function getBoopPic() {
    var curValue = curValue = Math.floor(Math.random()*booppics.length);
    return booppics[curValue];
}

module.exports = {
    name: 'boop',
    description: 'boop',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Boop')
            .setImage(getBoopPic())
            .setTimestamp()

        message.channel.send(exampleEmbed);
    },
}