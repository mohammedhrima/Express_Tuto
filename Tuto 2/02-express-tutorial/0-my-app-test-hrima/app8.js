const express = require('express');
const app = express()
const path = require('path')
const { people, products } = require('./data')

//app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.json(products)

})

app.all('*', (req, res) => {
    res.status(404).send('resourse not found')
})

app.listen(5000, () => {
    console.log("server is listening on port 8008...");
})