function getFishTime() {
    var curUTC = new Date().toISOString();
    var curTime = parseInt(curUTC.split('T')[1].substring(0,2));
    console.log("curTime: " + curTime);
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
    }
    console.log("fishperiod" + fishperiod);
    return fishperiod;
}

function printFishInfo(fishTime) {
    const data = require('./fish_timing.json');
    var message = "";
    var curTime = data[fishTime];

    var message = "The current locations of fish are: \n";
    for(i=0; i < fish.length; i++) {
        var curFish = fish[i];
        var curLoc = curTime[curFish];
        message += curFish + "->" + curLoc + "\n";
    }
    return message;
}


module.exports = {
    name: 'current',
    description: 'Current Legedary Fishing conditions',
    execute(message, args) {
        message.reply(String(printFishInfo(getFishTime())));
    },
}