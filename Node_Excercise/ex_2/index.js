//const expressModules = require('express');
//console.log(expressModules);

// require the express module
const express = require('express');

// then create a express server
const app = express();

// configure the default route and send a text as response
app.get('/', function(request, response) {
   
  response.end('HI shwetaCongrats you\'re using your first Node.js and Express as Web Server');
  console.log(response);
  //console.log( );
  
});
const port = 3000;
// configure the port that express is going to listen to
app.listen(port, function() {
  console.log(`This HTTP server is running on port ${port} `);
});


