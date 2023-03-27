const express = require('express')
const app = express()

// Set view engine to EJS
app.set("view engine", "ejs") 

app.use(express.static('public'));

// Define route for the home page
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

