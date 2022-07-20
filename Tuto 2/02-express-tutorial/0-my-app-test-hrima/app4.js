const { request, response } = require('express');
const express = require('express');
const app = express();

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.listen
//app.use

app.get(['/', '/home', '/Home'], (request, response) => {
    //response.send('home page')
    response.status(200).send('home page')
})

app.get('/about', (request, response) => {
    //    response.send('About page')
    response.status(200).send('About page')

})

app.all('*', (request, response) => {
    // response.send('<h1>Resource not found</h1>')
    //status(404) turn network status to 404
    response.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
    console.log("listening");
})