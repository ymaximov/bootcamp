// WITHOUT LOOP
// we want to say display Hello 5 times

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// DRY : don't repeat yourself
// & same action

// WITH LOOPS 

// same action a few times
// counter
// for (statement 1; statement 2; statement 3) {
//     // code block to be executed
// }


// run 5 times
for (let counter = 1; counter <= 5; counter++) {
    console.log("hello");
}

// run 5 times because we increment the counter by 1
for (let counter = 10; counter <= 15; counter++) {
    console.log("hello");
}

// run 3 times because we increment the counter by 2
for (let counter = 10; counter <= 15; counter+=2) {
    console.log("hello");
}


// BEHIND THE SCENE

// run 5 times
for (let counter = 1; counter <= 5; counter++) {
    console.log("hello");
}

// 1st step
// counter = 1
// counter <= 5 - 1 <= 5 - true
// enter the block and execute the statement  console.log("hello");
// counter = 2

// 2nd step
// counter = 2
// counter <= 5 - 2 <= 5 - true
// enter the block and execute the statement  console.log("hello");
// counter = 3

// 3rd step
// counter = 3
// counter <= 5 - 3 <= 5 - true
// enter the block and execute the statement  console.log("hello");
// counter = 4

// 4th step
// counter = 4
// counter <= 5 - 4 <= 5 - true
// enter the block and execute the statement  console.log("hello");
// counter = 5

// 5th step
// counter = 5
// counter <= 5 - 5 <= 5 - true
// enter the block and execute the statement  console.log("hello");
// counter = 6

// 6th step
// counter = 6
// counter <= 5 - false
// stop






// ADD MORE CODE INTO THE LOOP

// I want to console log hello, only when the counter = 1 and 3
// else console log bye
for (let counter = 1; counter <= 5; counter++) {
   if(counter === 1 || counter === 3){
        console.log(`Hello, the counter is ${counter}`);
   } else {
        console.log(`Bye, the counter is ${counter}`);
   }
}

// Hello, the counter is 1
// Bye, the counter is 2
// Hello, the counter is 3
// Bye, the counter is 4
// Bye, the counter is 5

for (let counter = 10; counter <= 15; counter+=2) {
    //counter will aways be even because we increment by 2
}

// i for index
// j 
for (let i = 10; i <= 15; i+=2) {
    //counter will aways be even because we increment by 2
}

for (let j = 10; j <= 15; j+=2) {
    //counter will aways be even because we increment by 2
}

// WRONG : NEEDS TO BE THE SAME VARIABLE NAME
for (let counter = 10; vanilla <= 15; vanilla+=2) {
    //counter will aways be even because we increment by 2
}






// SHORTCUTS
let num = 5;
num = num + 1;
num += 1;
num ++