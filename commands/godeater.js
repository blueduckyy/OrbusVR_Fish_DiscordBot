const Discord = require('discord.js');
var fs = require('fs');
var godeaterpics = [];


fs.readFile('./commands/godeaterpics.txt', function(err, data) {
    if(err) throw err;
    godeaterpics = data.toString().split("\n");
});
                   

function getGodeaterPic() {
    var curValue = curValue = Math.floor(Math.random()*godeaterpics.length);
    return godeaterpics[curValue];
}


module.exports = {
    name: 'godeater',
    description: 'Random GodEater Picture',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#d42a00')
            .setTitle('GodEater')
            .setImage(getGodeaterPic())
            .setTimestamp()

            message.channel.send(exampleEmbed);
    },
}