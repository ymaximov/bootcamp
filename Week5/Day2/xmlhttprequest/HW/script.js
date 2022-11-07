// AJAX
// Make an HTTP request using the GET METHOD on this API: https://jsonplaceholder.typicode.com/users

// Use the method onload, onprogress, onerror

// If there is no error, display on the page the name, email, city of the 3 first users

const xhr = new XMLHttpRequest();
// function getData(){
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
//     xhr.responseType = "json";
//     xhr.send();
// }
// getData()

// xhr.onload = function(){
//     if(xhr.status === 200){
//         console.log("success....");
//         console.log(xhr.response);
//     }
// }
// function displaystuff(stuff){
//     const container = Document
// }

const gifSite = new XMLHttpRequest();
function getData(){
    gifSite.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    // gifSite.responseType = "json";
    gifSite.send()
}
getData()

gifSite.onload = function(){
    if (gifSite.status !== 200){
        console.log(gifSite.status);
    } else {
        console.log('Finished!');
    }

    let responseAsObject = JSON.parse(gifSite.response);
    let htmldiv = document.querySelector("#jsontext")
    for (i = 0; i <=10; i++){
       const div = document.createElement("div")
       div.innerHTML = responseAsObject.data[i].embed_url
       htmldiv.append(div)
    }
    console.log(responseAsObject.data);
};