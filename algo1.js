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




function showSeats() {
    let seatArray = []
    let arrayRow = []
    let arraySeat = []


    for (let i = 0; i < 26; i++) { 
        arrayRow.push(i+1)
        for (let j = 0; j < 100; j++) {
            arraySeat.push(j+1)
            seatArray.push(`${arrayRow[i]} - ${arraySeat[j]}`)  
        }
 
    }
return seatArray;
}
console.log(showSeats())


/* 
starting from 2 arrays of numbers
result should be an array
we want to incremente every index of the first array from 1 to 100
*/ 