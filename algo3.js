/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

function minuteAngle(minute) {
    let angle;
    if (minute<=60){
        angle=360/minute;
        return angle;
    }
    else
    {
        return ('Please enter a value inferior or equal to 60')
    }

}

console.log(minuteAngle(50));
