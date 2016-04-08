var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './public'});
});

app.use(express.static('public'));

app.listen(3000, function() {
    console.log( 'listen' );
});