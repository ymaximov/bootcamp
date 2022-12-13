let array = ["hello", "my", "name", "is", "yaniv"];

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        let caps = arr.map(item => {
            if(typeof item === "string") {
                return item.toUpperCase();
            }
            else {
                reject("not all of items are strings")
            }
        })
        resolve(caps);
    })
}

makeAllCaps(array)
.then(result=> {
    let caps = sortWords(result);
    return caps;
})
.catch(err => {
    console.log(err);
})
.then(result=>{
    console.log(result);
})

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if(arr){
            resolve(arr.sort())
        }
        else{
            reject("Wrong Array")
        }
    })
}