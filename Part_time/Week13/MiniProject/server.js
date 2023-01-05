const express = require('express');
const app = express();
const host = 'localhost';
const port = 3001

const items = []

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(port, host, () => {
    console.log('Server is Listening on Port 3001');
})

app.post('/api', (req, res) => {
    items.push(req.body)
    console.log(req.body);
    res.json(items)
})
