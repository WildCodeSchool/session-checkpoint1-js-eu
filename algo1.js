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

const rows = [];
for (var i = 1; i <= 26; i++) rows.push(i);

const seats = [];
for (var it = 1; it <= 100; it++) seats.push(it);
const place = [];

console.log(rows);
console.log(seats);

const array = rows.map(row => {
  for (let n = 0; n < seats.length; n++) {
    place.push(`${row} - ${seats[n]}`);
  }
  return place;
});

console.log(place);
