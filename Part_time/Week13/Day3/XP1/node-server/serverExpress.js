const express = require('express');
const app = express();
const port = 3000;

const html = 
`
<html>
    <h1>Hello World!!</h1>
</html>
`

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(html)
})

app.listen(port, () => {
    console.log('Server is listening on port 3000');
})