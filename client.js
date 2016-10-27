/**
 * Created by fjatori on 9/28/2016.
 */
/**
 * Created by fjatori on 9/28/2016.
 */
var WebSocket = require('ws'),
    ws= new WebSocket("ws://localhost:8080");

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(msg){
    msg = msg.trim();
    ws.send(msg);
})

ws.on('message', function(msg){
    console.log('Received:', msg);
})

ws.on('close', function(code, desc){
    console.log('Disconnected', code + '-' + desc )
})

ws.on('error', function(e){
    console.log('Error', e.code)
})
