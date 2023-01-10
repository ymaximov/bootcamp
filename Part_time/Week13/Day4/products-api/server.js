const { products } = require('../modules/products')
const express = require('express');
const app = express();
const bp = require('body-parser')

app.use(bp.urlencoded({extended:true}))
app.use(bp.json())

app.listen(3001, () => {
    console.log('Listening on Port 3001');
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(item => item.id == id);
    if (!product) {
        return res.status(404).json({message: "product not found"})
    }
    res.json(product)
})

app.get('/api/search', (req, res) => {
    const productName = req.query.name;
    const productsResult = products.filter(item => {
        return item.name.toLowerCase().includes(productName.toLowerCase())
    })
    if (productsResult.length === 0){
        res.status(200).json({msg: 'No Products Found'})
    }
    res.json(productsResult)
})

app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(products)
})

//put
app.put('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id);
    if(index === -1){
        return res.status(404).json({msg: "not found"})
    }
    products[index] = {...products[index], name:req.body.name, price:req.body.price}
    res.status(200).json(products)
})
console.log(products);

//delete
app.delete('/api/products/:id', (req, res)  => {
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id);
    if(index === -1){
        return res.status(404).json({msg: "not found"})
    }
    products.splice(index, 1);(products)
})