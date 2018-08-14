const jokePackage = require('one-liner-joke');

const express = require('express');

// then create a express server
const app = express();
app.set('port', 3000);
//server listen 
app.listen(app.get('port'), function()
{
    console.log("we are listening at port number " +app.get('port'));
});


//server response on request
app.get('/joke',function(request,response)
{
    let joke1 = jokePackage.getRandomJoke();
    let joke2 = jokePackage.getRandomJoke();

    response.send("<h1>Joke 1 :"+joke1.tags+"</h1> <p>"+joke1.body+"</p>" + "<h1>Joke 2: "+joke2.tags+"</h1> <p>"+joke2.body+"</p>");
})