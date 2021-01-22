const Discord = require('discord.js');

const lemonpics = ['https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/when-life-gives-you-lemons-you-have-lemons-funny-lemon-pun-dogboo.jpg',
                  'https://images-ext-1.discordapp.net/external/wNGZS5bL_Y13tXzF7TW6VINuSRa25VS5ajDsvqpqI6o/https/res.cloudinary.com/teepublic/image/private/s--IO9QqbMO--/t_Resized%2520Artwork/c_fit%2Cg_north_west%2Ch_954%2Cw_954/co_ffffff%2Ce_outline%3A48/co_ffffff%2Ce_outline%3Ainner_fill%3A48/co_ffffff%2Ce_outline%3A48/co_ffffff%2Ce_outline%3Ainner_fill%3A48/co_bbbbbb%2Ce_outline%3A3%3A1000/c_mpad%2Cg_center%2Ch_1260%2Cw_1260/b_rgb%3Aeeeeee/t_watermark_lock/c_limit%2Cf_auto%2Ch_630%2Cq_90%2Cw_630/v1601410483/production/designs/14521079_0.jpg',
                  'https://images-ext-2.discordapp.net/external/UU6nLEYubI1NUmU5mclzdVK-SzUvZ9GkJrj5iH7TsjU/https/static3.depositphotos.com/1001657/155/i/950/depositphotos_1556760-stock-photo-funny-lemon-in-sun-glasses.jpg',
                  'https://images-ext-1.discordapp.net/external/TZ106Lw5YjtJ-lyKhgm706P2HpRcHFH7OrEDfbEET1A/%3Fq%3Dtbn%3AANd9GcT6AiHPqnVOeiY2SRRsWQrQdeE-64uDtjO9sQ%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images',
                  'https://images-ext-2.discordapp.net/external/e_BtySbwe0VGfd_dCJ7zt8Y4mutQOJRtv-gucQoLoVQ/%3Fw%3D584/https/waynegagnon.files.wordpress.com/2017/02/souvenir_20170207_lemons.jpg'];

function getLemonPic() {
    var curValue = curValue = Math.floor(Math.random()*lemonpics.length);
    return lemonpics[curValue];
}


module.exports = {
    name: 'lemon',
    description: 'For all the lemons.',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#fff44f')
            .setTitle('Lemon')
            .setImage(getLemonPic())
            .setTimestamp()

            message.channel.send(exampleEmbed);
    },
}