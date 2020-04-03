/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

function minuteAngle(minute) {
    let message = "";
    let angle = 0;

    //if 15 minutes equals 90 degrees, this means 1 minute equals 6 degrees:
    if (minute <= 60) {
        angle = minute * 6;
        message = `For the ${minute} the angle is ${angle}!`;
        console.log(message);
        return message;
    }
    if(minute > 60) {
        message = `${minute} is higher than 60! We only have 60 minutes as the maximum value. Try again!`;
        console.log(message);
        return message;
    }

    return message;
}




let button = document.getElementById('btnSubmit');

button.addEventListener('click', () => {
    let input = document.getElementById("angleMinutes").value;
    console.log(input);
    minuteAngle(input);
    document.getElementById("messageOutput").innerHTML = minuteAngle(input);
    let output = document.getElementById("messageOutput").innerHTML;
});

 