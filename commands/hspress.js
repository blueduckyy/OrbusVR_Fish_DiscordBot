const Discord = require('discord.js');
var fs = require('fs');
var path = require('path');
var hspresspics = [];


fs.readFile('./commands/hspresspics.txt', function(err, data) {
    if(err) throw err;
    hspresspics = data.toString().split("\n");
});


function getPressPic() {
    var curValue = curValue = Math.floor(Math.random()*hspresspics.length);
    return hspresspics[curValue];
}


module.exports = {
    name: 'hspress',
    description: 'The highsteppe press may be gone but not forgotten!',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FD7AAC')
            .setTitle('Highsteppe Press Archives')
            .setImage(getPressPic())
            .setTimestamp()

        message.channel.send(exampleEmbed);
    },
}