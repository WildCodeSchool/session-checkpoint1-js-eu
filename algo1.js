/*
We're building a ticket selling app for a cinema and we need to represent
all the seats in the main room.

In this room, the seats are organized as follows: 
    - There are 26 rows of seats. Each row is numbered from "1" to "26" 
    - Each row has 100 seats. Each seat is numbered from "1" to "100"
    

Create a function that returns an array of seats.
Each item in the array should be in the form: row-seat.

The final array should look something like this:
[
    1-1,
    1-2,
    1-3,
    .
    .
    .
    26-98,
    26-99,
    26-100
]
*/

const tickets = () => {

    const rowsArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    const minSeats = 1;
    const maxSeats = 100;
    let seatsArray = [];
    let cinema = [];
    
    //create the array of seats from 1 to 100:
    for (let i = minSeats; i <= maxSeats; i++) {
        seatsArray.push(i);
    }
    //console.log(seatsArray);

    //create the loop to add 100 seats to each of the 26 rows:
    for (let i = 0; i < rowsArray.length; i++) {
        //console.log(rowsArray[i]);
        for (let j = 0; j < seatsArray.length; j++) {
            cinema.push(`${rowsArray[i]}-${seatsArray[j]}`);
        }
    }
    //console.log(cinema);
    return cinema;
};

tickets();
