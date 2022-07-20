const express = require('express');
const app = express()
const path = require('path')

//app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.json([{ name: 'mohammed', age: '23' }, { name: "ziyad", age: '19' }])

})

app.all('*', (req, res) => {
    res.status(404).send('resourse not found')
})

app.listen(8008, () => {
    console.log("server is listening on port 8008...");
})