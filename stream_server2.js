/**
 * Created by fjatori on 10/26/2016.
 */
/**
 * Created by fjatori on 9/28/2016.
 */
//var request =require('request');
//var JSONStream = require('JSONStream');
var WSServer = require('ws').Server;
//var stream = require('webSocket-Stream');

//MongoWatch = require('mongo-watch')


var wss = new WSServer({port: 8080});
//var registry = 'http://skimdb.npmjs.com/registry';
//var changes = '/_changes?heartbeat=20000&feed=continous&since=';

function func (message) {
    console.log('inside func ' + ' =>>' + message)
    var y;
    var z;
    var type;
    if(message === 'a') {
        y = Math.random();
        z = Math.random();
        type = 'a';
    }

    else if(message === 'b') {
        y = Math.random();
        z = Math.random();
        type = 'b';
    }

    return {y:y,
        z:z,
        type:type}
}



wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);

        setInterval(function(){
            var arr=[];
            var returnedInfo = func(message);
            var randomY = returnedInfo.y;
            var randomZ = returnedInfo.z;
            var type = returnedInfo.type;

            arr[0] = randomY;
            arr[1] = randomZ;
            arr[2] = type;
            console.log(arr[0]+ ' ' + arr[1] + ' ' + arr[2]);
            //console.log(JSON.stringify(arr))
            ws.send(JSON.stringify(arr));
        },1000)
    });




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