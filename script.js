const calculateSum = arr => {
  let sum = 0;
  arr.map(element => {
    sum += element;
  });
  //   arr.forEach(element => {
  //     sum += element;
  //   });
  return sum;
};

console.log(calculateSum([1, 2, 3, 4, 5]));
