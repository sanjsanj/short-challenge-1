var express = require('express'),
app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
  console.log('Listening on port ' + port);
});