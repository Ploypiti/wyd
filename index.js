const express = require('express')
const app = express()
var path = require('path');
var port = process.env.PORT || 8000

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function() {
    console.log("WYD is running on port " + port + "!!!");
});
