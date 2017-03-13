var http = require('http');

var server = http.createServer( ( request, response ) => {
    console.log( request.method );
    
    if ( request.method === "POST") {
        console.log( 'post request recieved! ! !')
    }
});

server.listen(3000);