const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

var app = express();
var port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('New User Connected');

    socket.on('disconnect',()=>{
        console.log('User disconnected');
    });
});

var publicPath = path.join(__dirname, '..','public');

app.use(express.static(publicPath)); 


server.listen(port,()=>{
    console.log(`application started on port ${port}`)
});