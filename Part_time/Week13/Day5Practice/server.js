const express = require('express')
const app = express();
const host = 'localhost';
const port = 3002
const items = []

app.listen(port, host, () => {
    console.log('Server is listening on port 3002');
});

app.get('/', (req, res) => {

})