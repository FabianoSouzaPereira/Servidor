// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const socket = require('socket.io');
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT);

app.use(express.static('public'));
console.log('Server is running');
const io = socket(server);

var count = 0;

io.on('connection', (socket) => {

  console.log("New socket connetion: " + socket.id)

  socket.on('counter', () => {
    count++;
    io.emit('counter', count)
  })

})