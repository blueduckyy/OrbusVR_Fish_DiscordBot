const Discord = require('discord.js');
var fs = require('fs');
var whiskipics = [];


fs.readFile('./commands/whiski.txt', function(err, data) {
    if(err) throw err;
    whiskipics = data.toString().split("\n");
});


function getWhiskiPic() {
    var curValue = curValue = Math.floor(Math.random()*whiskipics.length);
    return whiskipics[curValue];
}


module.exports = {
    name: 'whiski',
    description: 'Random Whiski Picture',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#d42a00')
            .setTitle('Whiski')
            .setImage(getWhiskiPic())
            .setTimestamp()

        message.channel.send(exampleEmbed);
    },
}