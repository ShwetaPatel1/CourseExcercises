const express = require('express');
const app = express();

app.use('/generatedHTML', express.static('generated.html'));

//using pug template
app.set('view engine', 'pug');

app.get('/activities', (req, res) => {
  res.render('index', { title: 'Hobby Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});
app.get('/home', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/', (req, res) => {
  res.render('index1', { title1: 'Pug', message1: 'Hello world!', techName: 'Pug template', title2: 'Templates are really fun' });
});

app.listen(3000);