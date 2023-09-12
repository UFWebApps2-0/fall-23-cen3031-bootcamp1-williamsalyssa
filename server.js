var http = require('http'), 
    fs = require('fs'), 
    port = 8080;
var url = require('url');


var listingData, server;

var requestHandler = function(request, response) {
 

    if(url.parse(request.url).pathname == '/listings') {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(listingData));
    } else {
        response.writeHead(404);
        response.end('Bad gateway error - path');
    }
  
};

fs.readFile('listings.json', 'utf8', function(err, data) {
    var obj = JSON.parse(data);
    listingData = obj;
});

    var server = http.createServer(requestHandler);

    
    server.listen(port, function () {
        console.log('Server listening on: http://127.0.0.1:' + port + '/listings');
    });


