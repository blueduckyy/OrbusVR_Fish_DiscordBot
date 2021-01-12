const timeframes = [5,10,15,20];

const fish = ["blimp", "kylakin", "perch", "jelmiry"];

const Discord = require('discord.js');
const fishData = require('./fish.json');



function getFishTime() {
    var curUTC = new Date().toISOString();
    var curTime = parseInt(curUTC.split('T')[1].substring(0,2));
    console.log("curTime: " + curTime);
    var timeremaining = 5 - (curTime % 5);
    var fishperiod;
    if (curTime < 5) {
        fishperiod = 0;
    } else if (curTime < 10) {
        fishperiod = 1;
    } else if (curTime < 15) {
        fishperiod = 2; 
    } else if (curTime < 20) {
        fishperiod = 3;
    } else {
        fishperiod = 4;
        timeremaining = 5 - (curTime % 5) - 1;
    }

    console.log("fishperiod" + fishperiod);
    return {fishperiod, timeremaining};
}

function printFishInfo(fishArgs) {
    const data = require('./fish_timing.json');
    let timeremaining = fishArgs.timeremaining;
    let fishTime = fishArgs.fishperiod;
    

    const allfish = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Current Fish')
            .setDescription('This will provide you a look at the fish that are currently available. Flounder is not currently implemented. \n Fish will change within the next ' + timeremaining + ' hour(s). (If 0 that means they just changed. Fish also change on the hour.)')
            .setTimestamp();
    
    for(i=0; i < fish.length; i++) {
        var curFish = fish[i];
        var curLoc = data[fishTime];
        console.log(curLoc[curFish]);
        var retMessage = "Location: " + curLoc[curFish] + " \n";
        retMessage += "Weather Needs: " + fishData[curFish]['weather'] + " \n";
        retMessage += "Other Reqs: " + fishData[curFish]['requirements'] + " \n";
        allfish.addField(curFish, curLoc[curFish]);
    }
    return allfish;
}


module.exports = {
    name: 'current',
    description: 'Current Legedary Fishing conditions',
    execute(message, args) {
        message.channel.send(printFishInfo(getFishTime()));
    },
}