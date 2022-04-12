let alarmTimes = process.argv.slice(2);

const alarmSound = function(alarms) {
  for (let time of alarms) {
    if (isNaN(Number(time)) || Number(time) < 0) continue;
    setTimeout(() => process.stdout.write('\x07'), time * 1000);
  }
};

alarmSound(alarmTimes);