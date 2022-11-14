// function calculateTip(){
//     const askUser = prompt("Please Enter Bill Amount")
//    const tip10 = 1.10
//    const tip15 = 1.15
//    const tip20 = 1.20
//    if (askUser <= 50){
//     console.log(askUser*tip20);
//   } else if (askUser > 50 && askUser < 200){
//       console.log(askUser*tip15);
//     } else {console.log(`Your Total Is ${Math.round(askUser*tip10)}`)}
// }
//  calculateTip()

function billTotal(){
 const bill = prompt("Please Enter Bill Amount")
switch (bill) {
  case bill>=50:
    console.log(Math.round(bill*1.20));
    break;
  case bill <50 && bill >200:
    console.log(Math.round(bill*1.15));
  default:
    console.log(Math.round(bill*1.10));
    break;
}
}
billTotal()