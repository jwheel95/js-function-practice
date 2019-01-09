function isEven(num) {
  return num % 2 ===0;
}

function factorial(num) {
  let result = 1;
  for(i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function kebabToSnake(str) {
  const snake = str.replace(/-/g, "_");
  return snake;
}

// Higher Order Functions
// (passing a function into another function)

function sing() {
  console.log("twinkle twinkle");
  console.log("how I wonder...");
}

setInterval(sing, 5000);
