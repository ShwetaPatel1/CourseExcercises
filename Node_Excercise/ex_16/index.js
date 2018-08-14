const express = require('express');
const app = express();


const myMiddleware = function(request, response, next) {
   // request.someValue = 'This is a value to test the Middleware';
    console.log('In middleware...');
    next();
  }
//app.use(express.static('public'));
app.use('/assets', express.static('public'));
app.get('/', function (request, response) {

  //  response.send('<h1> Hello world...!!</h1><h2>'+request.someValue+'</h2>'); //this will go to browser
    console.log('In Get Method, now the request is :' + request.someValue); //this will be logged at server level

});
app.listen(3000, function () {
    console.log('Listening at port 3000');
});
