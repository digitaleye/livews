/**
 * Created by fjatori on 9/28/2016.
 */
//var request =require('request');
//var JSONStream = require('JSONStream');
var WSServer = require('ws').Server;
//var stream = require('webSocket-Stream');

MongoWatch = require('mongo-watch')


var wss = new WSServer({port: 8080});
//var registry = 'http://skimdb.npmjs.com/registry';
//var changes = '/_changes?heartbeat=20000&feed=continous&since=';


wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });



    setInterval(function(){
        var arr=[];
        var chart1Num1 = Math.random();
        var chart1Num2 = Math.random();
        var chart1Type = 'chart1'

        var chart2Num1 = Math.random();
        var chart2Num2 = Math.random();
        var chart2Type = 'chart2'

        arr[0] = chart1Num1;
        arr[1] = chart1Num2;
        arr[2] = chart1Type;

        arr[3] = chart2Num1;
        arr[4] = chart2Num2;
        arr[5] = chart2Type;


        console.log(arr[0] + arr[1] + arr[2]);
        console.log(arr[3] + arr[4] + arr[5]);
        //console.log(JSON.stringify(arr))
        ws.send(JSON.stringify(arr));
    },1000)

});



//wss.on('connection', function(socket){
//
//    request({url:registry,
//            json:true}, function(err,res,doc){
//        console.log(doc);
//        if(err) {
//            return console.log(err);
//        }
//        var since = doc.commited_update_seq -50
//
//        var idStream = JSONStream.parse('');
//console.log(idStream);
//
//
////console.log(registry + changes + since);
//        request(registry + changes + since)
//            .pipe(idStream)
//            .pipe(stream(socket));
//
//        socket.on('close', function(){
//            idStream.destroy();
//        })
//
//      }
//    )
//})