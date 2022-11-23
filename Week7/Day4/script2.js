const fs = require('fs');
// console.log(('1'));
// fs.readFile('./name', "utf-8", (err,data)=>{
//     if(err){
//         console.log("err=>", err);
//     } else{
//         console.log(data);
//     }
// })

let obj = {
    name: "John",
    age: 25
}


fs.appendFile('./myfile', JSON.string, (err)=>{
    if(err){
        console.log(err);
    }
})

