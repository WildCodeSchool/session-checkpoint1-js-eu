/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

/*1 hour = 60min= 30deg => 1 minute = 0,5deg*/

function minuteAngle(minute) {
  let angle;
  if (minute <= 60) {
    angle = minute * 0.5;
    return angle;
  } else {
    return "Enter a value inferior or Equal to 60";
  }
}

function hourAngle(hour) {
  let angle2;
  if (hour <= 11) {
    angle2 = hour * 30;
    return angle2;
  } else {
    return "Enter a value inferior or Equal to 11";
  }
}

const angle3 = angle + angle2;
