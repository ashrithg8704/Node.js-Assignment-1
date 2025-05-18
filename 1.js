/*
1. Hello Server
Task: Create a simple server that responds with "Hello, World!" on any route.

Hint:
Use the http module to create a server.
Use res.end("Hello, World!") to send the response.
server.listen(PORT) to run the server.

*/

import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'type/plain');
    res.end("Hello, World!");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});