/*
2. Time Server
Task: When a user visits /time, show the current server time.

Hint:
Use new Date().toLocaleTimeString() to get the current time.
Check if req.url === "/time" inside your createServer callback.
Send the time as response using res.end().

*/

import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');

    if (req.url === "/time") {
        const currentTime = new Date().toLocaleTimeString();
        res.end(`Current Server Time: ${currentTime}`);
    } else {
        res.end("Hello, World!");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})