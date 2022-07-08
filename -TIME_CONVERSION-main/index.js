function timeConverter(ms) {
    ms = Number(ms);
    let sec = Number(((ms / 1000) % 60).toFixed());
    let munit = Number(((ms / 1000 / 60) % 60).toFixed());
    let hour = Number(((ms / 1000 / 60 / 60) % 24).toFixed());
    let day = Number(((ms / 1000 / 60 / 60 / 24)).toFixed());
    let sectag = sec === 1 ? "second" : "seconds";
    let mintag = munit === 1 ? "minute" : "minutes";
    let hourtag = hour === 1 ? "hour" : "hours";
    let daytag = day === 1 ? "day" : "days";
  
    let day1 = `${day} : ${daytag}`;
    let hour1 = `${hour} : ${hourtag}`;
    let munit1 = `${munit} : ${mintag}`;
    let sec1 = `${sec} : ${sectag}`;
  
    let ans = "";
    if (day > 0) {
      ans += day1+ ",";
    }
    if (hour > 0) {
      ans += hour1 +",";
    }
    if (munit >0) {
      ans += munit1 +",";
    }
    ans+=sec1
  
    return ans;
  }
  module.exports = timeConverter;