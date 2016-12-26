var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));;

app.get('/', function(req, res) {
    res.send('Hola');
});

app.listen(app.get('port'), function(err) {

    if (err) {
        return console.log("Hubo en error"), process.exit(1);
    } else {
        console.log('Node app is running on port', app.get('port'));
    }
});
