// Problem Statement:
// Find the Maximum Number in an Array
// Write a function called findMaxNumber that takes an array of numbers as input and returns the maximum number in the array. For example, if the input array is [10, 5, 8, 20, 3], the function should return 20. - Dev

const findMaxNumber = numbers => {
  let max = numbers[0];

  numbers.forEach(number => {
    if (number > max) {
      max = number;
    }
  });

  return max;
};
const numbers = [10, 5, 8, 20, 3];
const maxNumber = findMaxNumber(numbers);
console.log(maxNumber); // Output: 20
