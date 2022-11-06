const restaurant = [20,34,12,23];

const VAT = 1.17;

// creating a new array, that contains the prices * vat
// WITHOUT MAP METHOD
function addTaxes(){
    const priceWithTaxes = [];
    for (let price of restaurant){
        priceWithTaxes.push(price*VAT)
    }
    console.log(priceWithTaxes);
}

addTaxes()

//1st loop
// price = 20

// //2nd loop
// price = 34



//WITH MAP METHOD
// loop through the restaurant array, and in each loop we push element*VAT
// into the array newRestaurantArray
const newRestaurantArray = restaurant.map((element) => element*VAT);
console.log(newRestaurantArray);

//WITH MAP METHOD and all the parameters of the callback function
const newRestaurantArrayTwo = restaurant.map((element, index, array) => element*index);
console.log(newRestaurantArrayTwo);

// 1st loop
// element = 20
// index = 0
// array = [20,34,12,23]

// // 2nd loop
// element = 34
// index = 1
// array = [20,34,12,23]

// // 3rd loop
// element = 12
// index = 2
// array = [20,34,12,23]



const students = [ 
    {
        name: 'Rich', 
        score: 33
    }, 
    {
        name: 'Peter', 
        score: 55
    } 
];

// students[0].name -->  'Rich'

// Use map to create a new array containing only the score of the students
// result => [33,55]

const scores = students.map((element) => {
    const newScore = element.score+10;
    return newScore;
})

// const scores = students.map((element) => element.score+10)


//element represents each object


// const student = {
//     name: 'Rich', 
//     score: 33
// }

// student.score --> 33
// student["score"]
