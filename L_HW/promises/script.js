



//EX 2

function timey(){
    return new Promise(function(res, rej){
        setTimeout(res, 4000);
    }).then(function(){
        console.log("success");
    })
}
timey()

const promiseSuccess = Promise.resolve('success');

promiseSuccess.then((value)=>{
    console.log(value);
});

const oops = new Promise((res, rej)=>{
    throw 'Oopsies, something went wrong!!';
})
oops.catch((error)=>{
    console.log(error);
});

//EX 3

const three = Promise.resolve("3");

three.then((value)=>{
    console.log(value);
});

function resolved(result){
    console.log("resolved");
}

function rejected(result){
    console.error(result);
}

Promise.reject(new Error('Boo!')).then(resolved, rejected)
