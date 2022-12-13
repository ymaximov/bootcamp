// // EX1

// function compareToTen(num) {
//   new Promise(resolve, reject); {
//     if (num < 10) {
//         resolve ("Resolved Promise!")
//     } else {
//         reject (`Number "${num}" is Greater than 10`)
//     }
//   }  
// }

// compareToTen("11")
// .then(result => console.log(result))
// .catch(error => console.log(error))

//EX2 

// const fourSec = new Promise((resolve) => setTimeout(() => resolve("Resolved after 4 Seconds!!"), 4000))

// fourSec
// .then(res => console.log(res))
// .catch(err => console.log(err "oops something went wrong"))

//EX3

// function resolveValue(num) {
//     return Promise.resolve("3");
//   }
  
//   function resolveValue(str) {
//     return Promise.reject("boo");
//   }