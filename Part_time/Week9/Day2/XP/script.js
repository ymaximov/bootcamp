// //EX1
// const xhr =  new XMLHttpRequest();

// xhr.onload = function(){
//     if (this.status === 200){
//         try {
//             const resObj = JSON.parse(this.responseText);
//             console.log(resObj);
//         } catch(e){
//             console.warn("Error in JSON. Could Not Parse");
//         }
//     } else {
//         console.warn("Did Not Receive 200 Status");
//     }
// }

// xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
// xhr.send();


//EX2 10 gifs about the sun
// const xhr =  new XMLHttpRequest();

// xhr.onload = function(){
//     if (this.status === 200){
//         try {
//             const resObj = JSON.parse(this.responseText);
//             console.log(resObj);
//         } catch(e){
//             console.warn("Error in JSON. Could Not Parse");
//         }
//     } else {
//         console.warn("Did Not Receive 200 Status");
//     }
// }

// xhr.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=k5oZLRzjZAXakdbQXAo5CqyXCcjX1rFL&q=sun&limit=10&offset=0&rating=g&lang=en");
// xhr.send();