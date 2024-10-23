 //Create a time data function
 function currentTime() {
    var d = new Date(); //get current date
    var hr = d.getHours(); //get current hours
    var min = d.getMinutes(); //get current minutes
    var sec = d.getSeconds(); // get current seconds
    var ampm; //declare empty variable to store AM and PM
    var utchr = d.getUTCHours(); //get current Greenwich Mean Time (GMT)/ UTC
    var timeDiff; //store time difference between GMT, UTC and local hour; 
    var adjTimeDiff; //store time difference converted to positive number;  adjusted time difference if negative
    //var localOffset = d.getTimezoneOffset() / 60; // get time zone offset in hours (negative for PT)
    var timeZone; //store 4 time zones variable for timezone (PT, MT, CT, ET)
    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if(min < 10) {
        min = "0" + min;
    }
    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM";// set to PM
    }else if (hr > 12){
        hr -= 12; //dectuct 12 from hours 
        ampm ="PM"; //set to PM
    } else {
        ampm = "AM"; //set to AM
    }
    // Calculate time difference between GMT and local time
     //timeDiff = hr - utchr;

     // Calculate time difference between local time and UTC
     //var offsetHours = -localOffset;


     // Convert negative time difference to positive
     //adjTimeDiff = Math.abs(timeDiff);

      // Calculate time difference from UTC in hours
    timeDiff = d.getTimezoneOffset() / 60; // Time difference in hours (e.g. PT is -7 in summer, -8 in winter)

    // Convert the timezone offset to positive
    adjTimeDiff = Math.abs(timeDiff);

    // Determine the time zone based on time difference
if (timeDiff == 7 || timeDiff == 8) {
timeZone = "PT"; // Pacific Time
} else if (timeDiff == 6) {
timeZone = "MT"; // Mountain Time
} else if (timeDiff == 5) {
timeZone = "CT"; // Central Time
} else if (timeDiff == 4) {
timeZone = "ET"; // Eastern Time
} else {
timeZone = "GMT"; // Default to GMT if no match
}
// Assemble time format to display
var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

// Display current local time and time zone on HTML elements
document.getElementById("clock").innerText = time; // adding time

// Run time data function every 1 second
setInterval(currentTime, 1000); // setting timer
}
    //assemble time format to display
    //var time = hr + ":" + min + ":" + sec + " " + ampm;
    //display current local time and time zone on HTML elements
    //document.getElementById("clock").innerText = time; //adding time
    //run time data function every 1 second
    //setInterval(currentTime, 1000); //setting timer
//}
//Intital run of time data function
currentTime();
//timerEvent(currentTime, milliseconds);