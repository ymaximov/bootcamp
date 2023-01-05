const http = require('http');
const host = 'localhost';
const port = 3000;

// const requestListener = (req, res) => {
//     res.writeHead(200);
//     res.end('placeholder');
// };
const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<html><h1>First Line</h1><h2>Second Line</h2>
    <h3>Third Line</h3></html`)
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is Running on Port 3000');
});
