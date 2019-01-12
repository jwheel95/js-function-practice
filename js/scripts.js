// Basic function review

// function isEven(num) {
//   return num % 2 ===0;
// }

// function factorial(num) {
//   let result = 1;
//   for(i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// function kebabToSnake(str) {
//   const snake = str.replace(/-/g, "_");
//   return snake;
// }

// Higher Order Functions
// (passing a function into another function)

// function sing() {
//   console.log("twinkle twinkle");
//   console.log("how I wonder...");
// }

// setInterval(sing, 5000);

// Practice with Arrays
function printReverse(arr) {
  for(i = arr.length -1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr) {
  let first = arr[0];
  for(i = 0; i < arr.length; i++) {
    if(arr[i] !== first) {
      return false;
    }
  }
  return true;
}