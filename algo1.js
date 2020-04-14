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

function seatsOrganiser() {
    const rows = 26;
    const seats = 100;
    let tickets = [];

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= seats; j++) {
            tickets.push(`${i} - ${j}`)
        }
    }

    return tickets;
}

console.log(seatsOrganiser())


// Pseudocode
// - There are 26 rows of seats. Each row is numbered from "1" to "26" 
// - Each row has 100 seats. Each seat is numbered from "1" to "100"


// Create a function that returns an array of seats.
// Each item in the array should be in the form: row-seat.
// We know that each row is numbered 1-26 (array, variable)
// We know that in each row there are 100 seats (array, variable)
// declare an empty tickets array
// two loops (nested) to output to the final array 
// We want to push the value of seat and row to the tickets array within the nested loop
// return the value of the tickets array
