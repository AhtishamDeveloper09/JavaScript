// Factorial of a number

// First Way
// function factorial(number) {
//     let arr = Array.from(Array(number + 1).keys());
//     let fact = arr.slice(1,).reduce((a, b) => {
//         return a * b;
//     });
//     return fact;
// }
// console.log("The factorial of given number is:", factorial(6));

// Second Way
function factorial(number) {
  let fact = 1;
  for (let index = 1; index <= number; index++) {
    fact = fact * index;
  }
  return fact;
}
console.log("The factorial of given number is:", factorial(0));
