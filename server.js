var http = require('http'), 
    fs = require('fs'), 
    port = 8080;
var url = require('url');

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  /*Investigate the request object. 
    You will need to use several of its properties: url and method
  */

    if(url.parse(request.url).pathname == '/listings') {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(listingData));
    } else {
        response.writeHead(404);
        response.end('Bad gateway error - path');
    }
  /*
    Your request handler should send listingData in the JSON format as a response if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: Explore the request object and its properties 
    HINT: Explore the response object and its properties
    https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    
    HINT: Explore how callback's work 
    http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
    
    HINT: Explore the list of MIME Types
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   
    HINT: Explore mdn web docs for resources on how to use javascript.
    Helpful example: if-else structure- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

    */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
    var obj = JSON.parse(data);
    listingData = obj;
    /*
      This callback function should save the data in the listingData variable,
      then start the server.

      HINT: Check out this resource on fs.readFile
      //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

      HINT: Read up on JSON parsing Node.js
      http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
     */

    //Check for errors
    /*this resource gives you an idea of the general format err objects and Throwing an existing object.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#throwing_an_existing_object
   */

});


    //Save the data in the listingData variable already defined


    //Creates the server
    var server = http.createServer(requestHandler);

    //Start the server
    server.listen(port, function () {
        //once the server is listening, this callback function is executed
        console.log('Server listening on: http://127.0.0.1:' + port + '/listings');
    });


