const express = require('express');
const app = express();
const port = 3002;

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

const obj = [
    {id: 1234}
]

const objJson = JSON.stringify(obj)

const userJson = JSON.stringify(user);

console.log(user);


app.get('/home', (req, res) => {
    // res.send('hello world')
})

app.listen(port, () => {
    console.log('Server is Listening on Port 3002');
})

app.use('/', express.static(__dirname + '/public'))

app.get('/json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(userJson)
})

app.get('/:hello', (req, res) => {
    const p = req.params
    res.setHeader('Content-Type', 'application/json')
    res.send(objJson)
})