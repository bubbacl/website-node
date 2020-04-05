const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares

// Routes
app.get('/', (req, res) => {
    res.render('index', {title: 'First Website'});
});

// Static files

// Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
