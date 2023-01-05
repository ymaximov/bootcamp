const express = require('express');
const app = express();
const port = 3001;

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

const userJson = JSON.stringify(user);

console.log(user);


app.get('/home', (req, res) => {
    // res.send('hello world')
})

app.listen(port, () => {
    console.log('Server is Listening on Port 3001');
})

app.use('/', express.static(__dirname + '/public'))

app.get('/json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(userJson)
})