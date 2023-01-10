const express = require('express');
const app = express();
const { products } = require('./modules/Products.js')
const http = require('http')

console.log(products);

app.listen(3001, ()=>{
    console.log('running on port 3001');
})

app.get('/login', (req, res)=>{
    res.send('Hello, Wecome to Yanivs First Server')
})
app.use('/', express.static(__dirname + '/public'))


app.get('/register', (req, res)=>{
    res.send('Hello there, Please register')
})

app.get('/api/products', (req, res)=> {
    res.json(products);
})

app.get('/api/search/:product_id', (req, res)=>{
    console.log(req.params);
    const product = products.find(item => {
        return item.id == req.params.product_id
    })
    console.log(product);
    res.json([product])
})
console.log('Hello Yanivs Server');

console.log(__dirname+'/public');