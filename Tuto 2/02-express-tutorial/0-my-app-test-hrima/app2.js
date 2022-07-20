const http = require('http')

const server = http.createServer((request, response) => {
    console.log(request.method);
    console.log(request.url);

    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write('<h1>Home page</h1>');
        response.end()
    }
    else if (request.url === '/about') {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write('<h1>About page</h1>');
        response.end()
    }
    else {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.write('<h1>page not found</h1>');
        response.end()
    }
})

server.listen(5000)