/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

// Within the live code we only had time to write the function without the interaction with the dom.
function minuteAngle(minute) {
    let angle = minute * 6;

    if (minute === 0 || minute > 60) {
        console.log('please enter a value between 1-60')
    } else {
        return angle;
    }
}

console.log(minuteAngle(47))

// Pseudocode 
// Return the minute angle when the user gives the time in minutes (disregarding the hour)
// We always look at the angle starting from 12
// as an example the minutes = 15 
// circle degrees = 360 
// Figure out how many degrees is = 1 minute * 6
// if the minute value is above 60 the function should return a console.log with a message to the user

