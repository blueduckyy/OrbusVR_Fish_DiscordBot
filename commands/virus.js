const Discord = require('discord.js');

const viruspics = ['https://media.discordapp.net/attachments/728968703772983407/730875181848854608/screen_1920x1080_1584497318.png',       
                   'https://cdn.discordapp.com/attachments/728857286021349429/732660397055803422/image0.jpg',
                   'https://cdn.discordapp.com/attachments/728990184485552230/799559190271229952/screen_1920x1080_1585086770.png',
                   'https://media.discordapp.net/attachments/728990184485552230/799557851169161246/Screenshot_20210114-130507_Gallery.jpg?width=632&height=1334',
                   'https://media.discordapp.net/attachments/728990184485552230/795059685136400404/screen_1920x1080_1609545297.png',
                   'https://media.discordapp.net/attachments/728990184485552230/795059989919563776/screen_1920x1080_1609545081.png',
                   'https://cdn.discordapp.com/attachments/728990184485552230/793036624979034142/PicsArt_12-28-09.44.01.png',
                   'https://cdn.discordapp.com/attachments/728990184485552230/793037497923010580/PicsArt_12-28-09.47.26.jpg',
                   'https://media.discordapp.net/attachments/728990184485552230/793030512926654474/screen_1920x1080_1609142080.png',
                   'https://media.discordapp.net/attachments/728990184485552230/793030399197446164/screen_1920x1080_1609142164.png',
                   'https://media.discordapp.net/attachments/728990184485552230/793029933235830824/screen_1920x1080_1609141926.png',
                   'https://media.discordapp.net/attachments/728990184485552230/793029340647653406/screen_1920x1080_1609139602.png',
                   'https://media.discordapp.net/attachments/728990184485552230/793029743330721822/screen_1920x1080_1609140492.png',
                   'https://media.discordapp.net/attachments/728990184485552230/793029053815717918/eater.png',
                   'https://media.discordapp.net/attachments/728990184485552230/792486900698316810/SI_20200328_233658.jpg',
                   'https://media.discordapp.net/attachments/728990184485552230/792486435823419422/unknown.png',
                   'https://media.discordapp.net/attachments/728990184485552230/792486159325462538/OculusScreenshot1572821803.jpeg?width=1336&height=1336',
                   'https://cdn.discordapp.com/attachments/728857286021349429/802064033791606834/image0.jpg',
                   'https://media.discordapp.net/attachments/728857286021349429/799379134554832896/com.orbusvr.OrbusVR-20210112-171745.jpg?width=1336&height=1336'];
                   

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