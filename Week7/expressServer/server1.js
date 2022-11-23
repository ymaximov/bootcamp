console.log(“hello word”);
console.log(‘hello lauren’)
const express = require(‘express’);
const { products } = require(‘./modules/data.js’);
const app = express();
app.listen(8000, () => {
    console.log(‘running on 8000’)
});
app.get(‘/api/products’, (req, res) => {
    res.json(products)
});
app.use(‘/’, express.static(__dirname + ‘/public’));
app.use(‘/about.html’, express.static(__dirname + ‘/public’));
app.get(‘/den’, (req, res) => {
    res.json({message: “will be ok”})
})