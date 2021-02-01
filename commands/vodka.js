const Discord = require('discord.js');
var fs = require('fs');
var vodkapics = [];


fs.readFile('./commands/vodka.txt', function(err, data) {
    if(err) throw err;
    vodkapics = data.toString().split("\n");
});


function getVodkaPic() {
    var curValue = curValue = Math.floor(Math.random()*vodkapics.length);
    return vodkapics[curValue];
}


module.exports = {
    name: 'vodkaa',
    description: 'Random Vodkaa Picture',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#d42a00')
            .setTitle('Vodkaa')
            .setImage(getVodkaPic())
            .setTimestamp()

        message.channel.send(exampleEmbed);
    },
}