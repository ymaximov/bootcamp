// 1. nums[1]

// 2. Nothing would happen. array stays the same

// 3. const favoriteNumbers = [4, 5, 6, 1, 2, 3, 7, 8, 9]

// 4. Real Madrid

// 5. const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//       myteam: France national football team
//     }
//   }  
  

// 6. yes can be defined. Invoking the function:
//     x(1, 2) would = 2 or whatever numbers are in parenthesis

// 7. No, since they are unnamed they cannot be requestIdleCallback.apply

// 8. Yes. Returns Hello Javascript

// 9. const myFunction = (num1, num2)=> num1 + num2
//   myFunction(40, 2)
//   myFunction(40, 0)
//   console.log("the answer to everything is", myFunction(42,0))


// 10. Prints Poppin' Bottles to the console.
// the foo function invokes the bar function when foo is logged bc bar is what was set to be retuned.France

// 11. click

// 12. yes

// // 13. 
// const button = document.getElementById("btn");
// console.log(button);
// const para = document.getElementsByTagName("p")
// console.log(para);

//  const chgColor = (event)=>{
//     event.target.style.color = "red"
//  }

// button.addEventListener('click',()=>{
//    const newP = document.createElement("p")
//    const newContent = document.createTextNode("New Paragraph")
//    newP.appendChild(newContent)
//    const element = document.body
//    element.appendChild(newP)
//    newP.addEventListener('mouseover', chgColor)
        
// });


// para.addEventListener('mouseover', function ()=>{  
//     para.style.color = 'red';
// });

14.
// const marks = [67, 60, 89, 90, 67, 42];
// // let sum = 0;
// // for (let i = 0; i <= marks.length; i++){
// //     sum += marks[i]
// // }

// for (const mark of marks)
// console.log(mark);


// 15. returns every mark of the marks array that "passed the test" and are greater or equal to 50 ([67, 60, 89, 90, 67] excluding 42)

// 16. returns only 50, 88

// // 17. 
// const input = [ 1, 2, 3, 4, 5 ];
// const squared = input.map(x => x * x)
// console.log(squared);

18. 
// const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
// let initialValue = 0
// let posNum = secondInput.filter(num => num >= 0)
// const sumArray = posNum.reduce((accumulator, currentValue) => accumulator + currentValue,
// initialValue)
// console.log(posNum);
// console.log(sumArray)

// 19.
// const input = 'George Raymond Richard Martin';
// const myArray = input.split(" ")
// myArray.forEach(func=> console.log(func.charAt(0)))

20.

21.
// function changeTshirt (myshirt){
//     console.log("myshirt", myshirt);
//     myshirt.color = "red"
//     console.log("myshirt", myshirt); //this is the parameter
//     console.log("tshirt", tshirt);   //this is the global variable
// }


// const tshirt = {
//     color : "blue",
//     price : 10
// }

// changeTshirt(tshirt)

// 22.
// const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  
//   let { clubs } = football
//   console.log(clubs);

// 23 
const football = {
    type: "sport",
    clubs: {
      france : "Paris Saint-Germain",
      spain : "Atlético Madrid",
    }
  }  

let { clubs: { france }, clubs: { spain } } = football
console.log(france);
console.log(spain);

function retrieveSports(team1, team2) {
    const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
    console.log(france, spain);
 }
 retrieveSports(football)
// 24. Chocolate Cake is for $10

// 25. Data will be printed in upper case to the console and the promise is fulfilled

// 26. All the data will be logged to the console

// 27. "first" will return


