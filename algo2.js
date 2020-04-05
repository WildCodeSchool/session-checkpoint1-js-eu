/* 
The new guy in your team wrote this terrible code
and now he's asking you why it doesn't work...

He's telling you the specs are:
    - the function receives an allNumbers (of integers) or null.
    - the function should return the minimum and maximum values (of the given allNumbers)
    - the return value should also be an allNumbers, i.e: [min, max]

Example 1:
allNumbers: [4, 6, 35, -65, -9, 0, 67]
Result: [-65, 67]

Example 2:min = 
allNumbers: [-30, 5, 43, 108, -5, -7, 89]
Result: [-30, 108]

Example 3:
allNumbers: [56, 7, 63, 9, 7, 12, 85]
Result: [7, 85]

Fix the following function to help your new coworker!

Note: try changing only the necessary code, don't rewrite the entire thing. 
*/

var minMax = allNumbers => {
  if (allNumbers == null || allNumbers == []) {
    return [];
  }

  let min = allNumbers[0];
  let max = allNumbers[0];

  for (let i = 0; i < allNumbers.length; i++) {

    min = allNumbers[i] < min ? allNumbers[i] : min;
    
    max = allNumbers[i] > max ? allNumbers[i] : max;
  }

  return [min, max];
};
