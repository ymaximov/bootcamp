const firstInp = document.forms[0].elements.fname //retrieve by id
const inpOne = document.forms[0].fname // retrive by id


// //submit the form and retrieve the input
const myForm = document.forms[0];
myForm.addEventListener("submit", retrieveData);


function retrieveData (event) {
    event.preventDefault(); //avoid the form from submitting and refreshing the page
    const ulHtml = document.querySelector(".usersAnswer"); //retrieve the ul
    
    const firstInput = myForm.elements.fname; //retrieve the 1st input
    const secondInput = myForm.elements.lname; //retrieve the 2nd input
    const firstInputValue = firstInput.value;
    const secondInputValue = secondInput.value;
    if(firstInputValue !== "" && secondInputValue !== "") {
        const firstLi = document.createElement("li");
        const secondLi = document.createElement("li");

        firstLi.textContent = firstInputValue;
        secondLi.textContent = secondInputValue;

        ulHtml.appendChild(firstLi);
        ulHtml.appendChild(secondLi);

        // ulHtml.append(firstLi, secondLi);
    } else {
        console.log("the inputs are empty");
        return;
    }
} 



// selecting by type attribute

// inside the form, select the inputs of type text
const inputTypeText = document.querySelectorAll("form > input[type='text']")



// //quicker way
function retrieveData (event) {
    event.preventDefault(); //avoid the form from submitting and refreshing the page
    const ulHtml = document.querySelector(".userAnswer"); //retrieve the ul
    
    const firstInputValue = myForm.elements.fname.value;
    const secondInputValue = myForm.elements.lname.value; //retrieve the 2nd input
    
    if(firstInputValue !== "" && secondInputValue !== "") {
        const firstLi = document.createElement("li");
        const secondLi = document.createElement("li");

        firstLi.textContent = firstInputValue;
        secondLi.textContent = secondInputValue;

        ulHtml.append(firstLi, secondLi);
    } else {
        console.log("the inputs are empty");
        return;
    }
} 


const mySecondForm = document.forms[0];
mySecondForm.addEventListener("input", retrieveLetters);//input event listener

function retrieveLetters(event){
    console.log("function executed");
    console.log(event.target.value); // retrieve each letter the user write
}