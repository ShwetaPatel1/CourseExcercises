
// require the express module
const express = require('express');

// then create a express server
const app = express();
app.set('port', 8080);


// configure the port that express is going to listen to
app.listen(app.get('port'), function () {
    console.log(`This(express) HTTP server is listening at port ${app.get('port')} `);
});


// configure the default route and send a text as response
app.get('/', function (request, response) {

    response.send('<h1> Hello world...!!</h1>'); //this will go to browser
    console.log('Response Status Message :' + response.statusMessage); //this will be logged at server level

});
app.sendRequest("/error", function (err, response) {
    console.log(response.json());
});


