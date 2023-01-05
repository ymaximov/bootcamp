const http = require('http');
const host = 'localhost';
const port = 3001;

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const userJson = JSON.stringify(user)

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200);
    res.end(`${userJson}`)
    // res.end('placeholder');
    
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is Running on Port 3001');
})

