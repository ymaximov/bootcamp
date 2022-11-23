console.log("hello");
const express = require('express');
const cors = require('cors');
const {products} = require('./data0.js');
const dotenv = require('dotenv');
const { json } = require('express');
dotenv.config()

const app =  express();
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
  })
  
  app.get('/products', (req,res)=>{
    res.json(products)
  })

  app.get('/api/products/:id', (req, res)=>{
    const {id} = req.params;
    const product = products.find(item => {
        return item.id == id
    })

    if(!product){
        return res.status(404).json({msg: 'not found'})
    }
    res.json(product)
  })

  app.get('/api/search', (req, res)=>{
    const {q} = req.query;
    const result = products.filter(item =>{
        return item.name.toLocaleLowerCase(). includes(q.toLocaleLowerCase())
    })
    if(res.length === 0){
        return res.status(200).json({msg: 'no product found'})
    }
    res.json(result)
  })

  app.post('/api/product', (req, res)=>{
    res/json({msg:'post'})
  })

  app.put('/api/products/:id', (req, res)=>{
    const {id} = req.params;  
})
const index = products.findIndex(item =>{
    return item.id = id
})