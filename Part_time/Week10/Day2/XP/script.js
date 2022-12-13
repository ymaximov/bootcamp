// //EX1

// const getData = async() => {
//     const res = await
//     fetch("https://www.swapi.tech/api/starships/9/");
//     const data = await res.json();
//     return data
//     console.log(data);
// }
// getData()
// .then(res=> {
//     console.log(res.result);
// })
   
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//Console: 
//Calling 
//Resolved