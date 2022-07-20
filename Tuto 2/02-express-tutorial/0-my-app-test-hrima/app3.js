const http = require('http')
const { readFileSync } = require('fs')

//get all files
const homePage = readFileSync('navbar-app/index.html')
const Style = readFileSync('navbar-app/styles.css')
const Logo = readFileSync('navbar-app/logo.svg')
const Js = readFileSync('navbar-app/browser-app.js')

const server = http.createServer((request, response) => {
    //console.log(request.method);
    //console.log(request.url);
    //Home page
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(homePage);
        response.end()
    }
    //about page
    else if (request.url === '/about') {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write('<h1>About page</h1>');
        response.end()
    }
    //Style
    else if (request.url === '/styles.css') {
        response.writeHead(200, { 'content-type': 'text/css' });
        response.write(Style);
        response.end()
    }
    //Logo
    else if (request.url === '/logo.svg') {
        response.writeHead(200, { 'content-type': 'image/svg+xml' });
        response.write(Logo);
        response.end()
    }
    //Js
    else if (request.url === '/browser-app.js') {
        response.writeHead(200, { 'content-type': 'text/javascript' });
        response.write(Js);
        response.end()
    }
    //404
    else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.write('<h1>page not found</h1>');
        response.end()
    }
})

server.listen(5000)