var PORT = process.env.PORT || 3000; //set the port dynamically if 3000 is not available
var express = require('express');
var app = express(app);
//var db = require('./db.js')
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var moment = require('moment');



io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
        io.emit('new-message',message);
        console.log(message);
      });
});

http.listen(PORT, function(){
    console.log('server started')
});