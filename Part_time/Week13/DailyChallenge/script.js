const { largeNumber, dateTime } = require('./main.js')
// Part 1

// const b = 5;
// const sum = largeNumber + b;
// console.log(sum);

// Part 2

// const http = require('http');
// const host = 'localhost';
// const port = 3000;

// const requestListener = (req, res) => {
//     // res.writeHead(200);
//     // res.end('Yanivs Server');
//     res.setHeader('Content-Type', 'text/html');
//     // res.writeHead(200);
//     // res.end(`<html><body><h1>Serving HTML</h1></body></html>`)
//     res.writeHead(200);
//     res.end(`<html><body><h1>My Module is ${sum}</h1><h1>Hi There FrontEnd</h1></body></html>`)

// }

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log('Im Listening');
// })

// Part 3
const http = require('http');
const host = 'localhost';
const port = 8080;

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<html><h1>The Current Date and Time is ${dateTime}</h1></html>`)
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Listening on Port 8080');
})