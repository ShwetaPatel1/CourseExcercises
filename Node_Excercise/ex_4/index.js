const app = require('express');
const app = express();
const post = 3000;
const requestHandler = (request, response) => {  
    response.send('Hello Node.js Server!');
  }
  
  const server = http.createServer(requestHandler);