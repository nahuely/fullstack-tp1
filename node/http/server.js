var http = require('http');
var fs = require('fs');


var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.createReadStream('data.txt').pipe(response);
    // utilizando fs.createReadStream 
    // leer un archivo y escribirlo en el stream response
});

server.listen(8000, function() {
    console.log('ahora si estoy escuchando');
});