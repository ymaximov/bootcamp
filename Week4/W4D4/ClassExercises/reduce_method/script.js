const numbers = [10, 20, 30, 40];

// without reduce
function addNumbers (){
    let sum = 0;
    for(let num of numbers){
        sum += num
    }
    console.log(sum);

}

addNumbers()


//with reduce
const sum = numbers.reduce((accumulator, element, index) => {
    const total = accumulator+element;
    return total;
})

console.log(sum);


// 1st loop
// accumulator = 10 //first element
// element = 20
// return accumulator+element = 10+20 = 30


// 2nd loop
// accumulator = 30
// element = 30
// return accumulator+element = 30+30 = 60

// 3rd loop
// accumulator = 60
// element = 40
// return accumulator+element = 60+40 = 100



// 2nd loop
// accumulator = 30
// element = 30
// return accumulator+element = 30+30 = 60

//WITH INITIAL VALUE

const sumTwo = numbers.reduce((accumulator, element) => {
    const total = accumulator+element;
    return total;
}, 1000)

console.log(sumTwo);

// 1st loop
// accumulator = 1000
// element = 10
// return accumulator+element = 1000+10 = 1010

// 2nd loop
// accumulator = 1010
// element = 20
// return accumulator+element = 1010+20 = 1030

// 3rd loop
// accumulator = 1030
// element = 30
// return accumulator+element = 1030+30 = 1060

// 4th loop
// accumulator = 1060
// element = 40
// return accumulator+element = 1060+40 = 1100


// ----------------------------
//with array of strings
const users = ["Lea", "Sarah", "Tom", "Vanessa"];
//secret society LSTV

const secretSociety = users.reduce((accumulator, element) => {
    const sentence = accumulator+element[0];
    return sentence;
}, "")

const secretSocietytwo = users.reduce((accumulator, element) => accumulator+element[0], "")

console.log(secretSociety);

// 1st loop
// accumulator = ""
// element = "Lea"
// element[0] = L
// return ""+"L" -- "L"

// 2nd loop
// accumulator = "L"
// element = "Sarah"
// element[0] = S
// return "L"+"S" -- "LS"

// 3rd loop
// accumulator = "LS"
// element = "Tom"
// element[0] = T
// return "LS"+"T" -- "LST"