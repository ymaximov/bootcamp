const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
redButton.addEventListener('click', respondClickRed);
blueButton.addEventListener('click', respondClickBlue);


function respondClickRed() {
    document.body.style.backgroundColor = "red"
}
function respondClickBlue() {
    document.body.style.backgroundColor = "blue"
}
const colors = ["blue", "yellow", "green", "pink"];

const hOne = document.querySelector("h1").textContent;
console.log(hOne);
const art = document.body.firstElementChild;
const lastP = art.lastElementChild;
lastP.remove();
console.log();

const hTwo = document.querySelector("h2")
function bckChange(){document.body.style.backgroundColor = "red"}
hTwo.addEventListener('click', bckChange)

const hThree = document.querySelector("h3")
function disappear(){hThree.style.display = "none"}
hThree.addEventListener('click', disappear)

const btn = document.querySelector("#btn");
btn.addEventListener('click', bold)
function bold(){
    const allP = document.getElementsByTagName("p")
    for (i=0; i < allP.length; i++){
        console.log(allP[i]);
        allP[i].style.fontWeight = "bold"
    }
    console.log(allP);
}
