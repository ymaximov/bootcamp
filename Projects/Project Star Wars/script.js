const htmlForm = document.getElementById("form")
const formInput = document.getElementById("name")
const button = document.getElementById("btn")
const inputValue = formInput.value
const para = document.getElementsByTagName("p")
htmlForm.addEventListener("submit", getData);
// console.log(htmlForm);

async function getData(character) {
    try {
        const urlApi = "https://www.swapi.tech/api/people/"
        const fetchResult = await fetch(urlApi)
        console.log(fetchResult);

        if (fetchResult.status === 200) {
            const dataInfo = await fetchResult.json()
            console.log(dataInfo);
        } else {
            
        }

    } catch(err){
        console.log("the error is", err);
    }
 
    }

getData()



// function search(event) {
//     event.preventDefault();
   
// }
// search()
