// //1. Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// //Answer
// I am John Doe from Vancouver CanvasGradient. Latitude 49.2827, Longitude -123.1207

//2.

// function displayStudentInfo(objUser){
//     //destructuring
//     const {first, last} = objUser
//     return console.log(`Your full name is ${first} ${last}`);
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

//3.
//Part1

// const users = { user1: 18273, user2: 92833, user3: 90315 }
// let entries = Object.entries(users)
// console.log(entries);
// for (const [key, value] of Object.entries(users)){
//     console.log(`${key}, ${value * 2}`);
// }


//Exercise 4 : Person Class
//Analyze the code below. What will be the output?
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
//ANSWER: Object

// //Exercise 5 : Dog Class
// //Analyze the options below. Which constructor will successfully extend the Dog class?
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
//   //ANSWER 
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
//Exercise 6 : Challenges
//PT 1
// // [2] === [2] TRUE
// {} === {} TRUE

//const object1 = { number: 5 }; 
//What is, for each object below, the value of the property number and why?


// const object1 = { number: 5 }; 5
// const object2 = object1; 5
// const object3 = object2; 5
// const object4 = { number: 5}; 5

// object1.number = 4; 4
// console.log(object2.number) 4
// console.log(object3.number) 4
// console.log(object4.number) 4

//Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }
    sound(noise){
        const sentence = `${noise} im a ${this.type} named ${this.name} and Im ${this.color}`
        console.log(sentence);
    }
    
}

const farmerCow = new Mamal("Lily", "Cow", "Brown and White")
console.log(farmerCow)
console.log(farmerCow.sound(moo))