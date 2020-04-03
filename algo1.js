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

function allSeatsMap(){
    // CREATE AN ARRAY FOR THE ROWS (1 - 26)
    let rows = [];
    for(let i = 1; i <= 26; i++){
        rows.push(i)
    }
    //CREATE AN ARRAY FOR THE SEATS (1 - 100)
    let seats = [];
    for(let i = 1; i <= 100; i++){
        seats.push(i)
    }
    //ITERATE ROW AND SEATS ARRAYS
    let mapSeats = [];
    let tempArray = [];
    for (i = 0; i < rows.length; i++){
        for(j = 0; j < seats.length; j++){
            tempArray.push(`${rows[i]} - ${seats[j]}`)
        }
        mapSeats.push(tempArray);
        tempArray = [];
    }
        return mapSeats;
}

console.log(allSeatsMap());
