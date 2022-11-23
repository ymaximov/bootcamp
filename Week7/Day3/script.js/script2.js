const fs = require('fs');

fs.readFile('./name' 'utf-8', (err,data)=>{
    if(err){
        console.log(err=>, err);
    } else{
        console.log(data);
    }
})