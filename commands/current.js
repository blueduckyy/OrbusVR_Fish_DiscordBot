const timeframes = [5,10,15,20];

const fish = ["blimp", "kylakin", "perch", "jelmiry", "flounder"];

const Discord = require('discord.js');
const fishData = require('./fish.json');
const flounderData = require('./flounder.json');



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

function getFlounderLoc(fishTime) {
    const startDate = new Date('1/18/21')
    const today = new Date().toISOString().split('T');
    const todayUTC = new Date(today[0]);
    const todayTime = today[1].substring(0,5);
    const diffTime = Math.abs(todayUTC - startDate);
    const diffDays = Math.ceil(diffTime/ (1000 *60 *60 * 24));
    
    const curFlounderDay = diffDays % 5;
    var curFlounderInfo = flounderData[curFlounderDay];
    var flounderLoc = "";
    for( item in curFlounderInfo) {
        var curItem = curFlounderInfo[item];
        if (curItem['start'] <= todayTime && todayTime < curItem["end"]) {
            flounderLoc += curItem["location"] + " \n";
            flounderLoc += "Flounder will change at the following UTC time: " + curItem["end"] + " \n";
            flounderLoc += "Current UTC time is: " + todayTime;
            break;
        }
    }
    console.log(flounderLoc);
    if (flounderLoc === "") {
        flounderLoc = "None";
    }
    return (flounderLoc);
}

function printFishInfo(fishArgs) {
    const data = require('./fish_timing.json');
    let timeremaining = fishArgs.timeremaining;
    let fishTime = fishArgs.fishperiod;
    

    const allfish = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Current Fish')
            .setDescription('This will provide you a look at the fish that are currently available. \n Fish will change within the next ' + timeremaining + ' hour(s). (If 0 that means they just changed. Fish also change on the hour.) \n Flounder changes more frequently and can be seen below.')
            .setTimestamp();
    
    for(i=0; i < fish.length; i++) {
        var curFish = fish[i];
        var curLoc;
        if (curFish === "flounder") {
            curLoc = getFlounderLoc();
        } else {
            curLoc = data[fishTime][curFish];
        }
        var retMessage = "Location: " + curLoc + " \n";
        retMessage += "Weather Needs: " + fishData[curFish]['weather'] + " \n";
        retMessage += "Other Reqs: " + fishData[curFish]['requirements'] + " \n";
        retMessage += "Lure: " + fishData[curFish]['lure'] + " \n";
        allfish.addField(curFish, retMessage);
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