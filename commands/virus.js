const Discord = require('discord.js');
var fs = require('fs');
var viruspics = [];


fs.readFile('./commands/viruspics.txt', function(err, data) {
    if(err) throw err;
    viruspics = data.toString().split("\n");
});
                   

function getVirusPic() {
    var curValue = curValue = Math.floor(Math.random()*viruspics.length);
    return viruspics[curValue];
}


module.exports = {
    name: 'virus',
    description: 'Random Virus Picture',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Virus')
            .setImage(getVirusPic())
            .setTimestamp()

            message.channel.send(exampleEmbed);
    },
}