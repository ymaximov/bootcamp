// I want to retrieve the H1
const title = document.body.firstElementChild;
console.log(title); // h1

//I want to retrieve the div
const division = document.body.children[1];
console.log(division); 

const para = document.body.children[1].firstElementChild;
const paraOther = division.firstElementChild;
console.log(paraOther); 

//retrieve depending on the sibling relationship
const div = title.nextElementSibling;
console.log(div); 

// access the text content of the h1
const text = document.body.children[0].textContent; //hello

// replace the text content
document.body.children[0].textContent = "Bye";

// add some content to the text content
document.body.children[0].textContent += " John"; // Bye John
