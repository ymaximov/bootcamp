const fs = require('fs');

// const data = fs.readFileSync('info.txt');
// console.log(data.toString());

// const info = fs.readFile('info.txt', 'utf-8', (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// })

// const readInfo = async () => {
//     const i = await fs.readFile('info.txt', 'utf-8')
// }
// readInfo()
// console.log(info);

// console.log('after reading file');

// const users = [
//     {name: 'John', email: 'aaa@gmail.com'},
//     {name: 'Paul', email: 'bbb@gmail.com'}
// ]

// fs.appendFile('users', JSON.stringify(users), 'utf-8', (err) => {
//     if (err) console.log(err);
// })

// const data = fs.readFileSync('users', 'utf-8')
// console.log(JSON.parse(data));

// fs.copyFile('users', 'users2', (err) => {
//     if (err) console.log(err);
//     console.log('File Copied');
// })

// fs.mkdir('public', (err) => {
//     if(err) return console.log(err);
//     console.log('Folder Created');
// })

fs.readdir(__dirname+'/public', (err, files) => {
    if(err) console.log(err);
    console.log(files);
})