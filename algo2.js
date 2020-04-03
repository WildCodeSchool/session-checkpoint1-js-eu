/* 
The new guy in your team wrote this terrible code
and now he's asking you why it doesn't work...

He's telling you the specs are:
    - the function receives an array (of integers) or null.
    - the function should return the minimum and maximum values (of the given array)
    - the return value should also be an array, i.e: [min, max]

Example 1:
Array: [4, 6, 35, -65, -9, 0, 67]
Result: [-65, 67]

Example 2:
Array: [-30, 5, 43, 108, -5, -7, 89]
Result: [-30, 108]

Example 3:
Array: [56, 7, 63, 9, 7, 12, 85]
Result: [7, 85]

Fix the following function to help your new coworker!

Note: try changing only the necessary code, don't rewrite the entire thing. 
*/

var minMax = (array) => {
    let min = array[0];
    let max = array[0];

    for (let i = 0; i <= array.length - 1; i = i + 1) {

        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return [min, max];
}

console.log(minMax([4, 6, 35, -65, -9, 0, 67]));
console.log(minMax([-30, 5, 43, 108, -5, -7, 89]));
console.log(minMax([56, 7, 63, 9, 7, 12, 85]));
