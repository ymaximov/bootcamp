let bankAmount = 10000;
const carPrice = 50000;

// if (condition) {
//     //what we do if the condition is true
// } else {
//     // if the condition is false
// }

// bigger or equal
if (bankAmount >= carPrice){
    console.log("I have enough");
} else {
    console.log("I don't have enough");
}


let bankAmountJohn = 10000;
const carPriceJohn = 50000;
const phonePrice = 2000;

if (bankAmountJohn >= carPriceJohn){
    console.log("I have enough to buy a car");
    bankAmountJohn = bankAmountJohn - carPriceJohn; //buying the car
    // bankAmountJohn -= carPrice; //shortcut
} else {
    console.log("I have enough to buy a phone");
    bankAmountJohn -= phonePrice;
}

console.log(bankAmountJohn);


let bankAmountDavid = 10000;
const carPriceDavid = 50000;
const phonePriceDavid = 12000;
const penPrice = 10;

if (bankAmountDavid >= carPriceDavid) {
    console.log("I have enough to buy a car");
} else if (bankAmountDavid >= phonePriceDavid) {
    console.log("I have enough to buy a phone");
} else if (bankAmountDavid >= penPrice) {
    console.log("I have enough to buy a pen");
} else {
    console.log("I wont't buy anything");
}

console.log("OUT");


// if (condition){

// } else if (condition) {

// } else if (condition) {
    
// } else if (condition) {
    
// } else if (condition) {
    
// } else {

// }


// if (condition){

// } else if (condition) {

// } else if (condition) {
    
// } else if (condition) {
    
// } else if (condition) {
    
// }

// //bla bla bla bla bla




const age = 20;
const height = 1.60;

// you can enter the roller coaster if
// - bigger than 25 yo
// or
// - height bigger 1.40

// OR ||

// one of them needs to be true
if (age > 25 || height > 1.40){
    console.log("enter the roallercoaster");
} else {
    console.log("not enter the roallercoaster");
}


// and &&

// both of them needs to be true
if (age > 25 && height > 1.40){
    console.log("enter the roallercoaster");
} else {
    console.log("not enter the roallercoaster");
}

const username = "John";

if ((age > 25 && height > 1.40) || username === "John"){
    console.log("enter the roallercoaster");
} else {
    console.log("not enter the roallercoaster");
}


const users = [
	{
		username : "John",
		password: 1234
	},
	{
		username : "Lea",
		password: 2222
	},
	{
		username : "David",
		password: 6767,
	}
];

console.log(users);
console.log(users[2]["password"]);

const passDavid = users[2]["password"];

if (passDavid === 6767) {
    users[2]["isLoggedIn"] = true;
    console.log(users);
}


const isLoggedIn = true;


if (isLoggedIn === true) {
    console.log("Hello");
} else {
    console.log("Bye");
}

if (isLoggedIn) {
    console.log("Hello");
} else {
    console.log("Bye");
}

const isSignedIn = false;

if (isSignedIn) {
    console.log("Hello");
} else if (isSignedIn === false) {
    console.log("Bye");
}

if (isSignedIn) {
    console.log("Hello");
} else if (isSignedIn !== true) {
    console.log("Bye");
}

if (isSignedIn) {
    console.log("Hello");
} else if (!isSignedIn) {
    console.log("Bye");
}

// ! not

// !true = not true = false


