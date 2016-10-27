/**
 * Created by fjatori on 9/28/2016.
 */
/**
 * Created by fjatori on 9/28/2016.
 */
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function(socket){

    socket.on('message', function(msg){
        console.log('Received: ', msg, '\n', 'From IP: ',
            socket.upgradeReq.connection.remoteAddress);

        if(msg === 'Hello') {
            socket.send('websockets!');
        }
    })

    socket.on('close', function(code, desc){
        console.log('Disconnet: ' + code + ' - ' + desc);
    })


})
