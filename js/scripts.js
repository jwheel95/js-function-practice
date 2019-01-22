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
// function printReverse(arr) {
//   for(i = arr.length -1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// function isUniform(arr) {
//   let first = arr[0];
//   for(i = 0; i < arr.length; i++) {
//     if(arr[i] !== first) {
//       return false;
//     }
//   }
//   return true;
// }

// function sumArray(arr) {
//   let answer = 0;
//   arr.forEach(function(i) {
//     answer += i;
//   })
//   return answer;
// }

// function max(arr) {
//   let maxNum = arr[0];
//   arr.forEach(function(i) {
//     if (i > maxNum) {
//       maxNum = i;
//     }
//   })
//   return maxNum;
// }

// // BUILD MY OWN FOREACH

// function myForEach(arr,func) {
//   for(i = 0; i < arr.length; i++) {
//     func(arr[i]);
//   }
// }

// JS OBJECT DATABASE ARRAY
// const movieDb = [
//   {
//     name: "Pan's Labyrinth",
//     rating: "5 stars",
//     haveSeen: true
//   },
//   {
//     name: "Devil's Backbone",
//     rating: "4 stars",
//     haveSeen: true
//   },
//   {
//     name: "Pacific Rim",
//     rating: "3 stars",
//     haveSeen: false
//   },
//   {
//     name: "Hellboy",
//     rating: "3.5 stars",
//     haveSeen: false
//   }
// ]

// movieDb.forEach(function(movie) {
//   let result = "You have ";
//   if(movie.haveSeen === true) {
//     result += "seen " + movie.name + ".";
//   } else {
//     result += "not watched " + movie.name + ".";
//   }
//   result += " It has " + movie.rating + " out of 5.";
//   console.log(result);
// })

const myBtn = document.querySelector('#btn');
let isPurple = false;

myBtn.addEventListener('click', function() {
  if (isPurple) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "purple";
  };
  isPurple = !isPurple;
});