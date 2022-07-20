const express = require('express');
const path = require('path');
const app = express();

//setup static middleware
app.use(express.static('./public')) //for js and css files ..

app.get(['/', '/home'], (request, response) => {
    response.sendFile(path.resolve(__dirname, './public/main.html'))
    // adding to static
    // SSR
})


app.all('*', (request, response) => {
    response.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log("server is listening on port 5000...");
})