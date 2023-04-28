const express = require('express');
const app = express();

// Set view engine to EJS
app.set("view engine", "ejs"); 

app.use(express.static('static'));

// Start server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// Define route for the home page
app.get('/home', (req, res) => {
    res.render('pages/home');
});

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/interest', (req, res) => {
    res.render('pages/interest');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});