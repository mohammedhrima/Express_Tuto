const express = require('express');
const app = express()
const path = require('path')
const { people, products } = require('./data')

//app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home page</h1><a href="/api/products">products</a>');

})

app.get('/about', (req, res) => {
    res.status(200).send('<h1>Home page</h1>');

})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProduct)
})

/*
method 1
products.map(product1 => {
    const { id, name, image } = product1;
    app.get(`/api/products/${id}`, (req, res) => {
        res.json({ id, name, image })
    })
})
*/
//to set route paramater use ":"
app.get('/api/products/:productID', (req, res) => {
    //console.log(req);
    //console.log(req.params);
    //req.params.productID return a string number
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    singleProduct ? res.status(200).json(singleProduct) : res.status(404).send('<h4>page not found</h4>')
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
})

app.get('/api/v1', (req, res) => {
    console.log(req.query);
    res.send(`<h1>${req.query.name}</h1>`)
})

//for the rest of requests
app.all('*', (req, res) => {
    res.status(404).send('<h1>resourse not found</h1>')
})

app.listen(5000, () => {
    console.log("server is listening on port 8008...");
})