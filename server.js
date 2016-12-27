var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(app.get('port'), function(err) {

    if (err) {
        return console.log("Hubo en error"), process.exit(1);
    } else {
        console.log('Node app is running on port', app.get('port'));
    }
});
