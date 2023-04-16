// 1. Write a JavaScript program to get an array from the user and return the:
// a) Sum of all elements in the array using reduce()
// b) Average of all elements in the array using reduce()
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Output:
// 15
// 3

//Solution:
const array = [1, 2, 3, 4, 5];

// Sum of all elements in the array using reduce()
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

// Average of all elements in the array using reduce()
const average = sum / array.length;
console.log(average);
