const numbers = [65, 44, 12, 4];
const newArray = numbers.map(mulByZero)
function mulByZero(mul){
    return mul*2
}
console.log(newArray);