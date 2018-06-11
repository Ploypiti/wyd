const express = require('express')
const app = express()
var path = require('path');
var colors = require('colors');
var port = process.env.PORT || 8000

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function() {
    console.log(colors.magenta.bold("WYD is running on port " + port + "!!!"));
    console.log(colors.cyan.bold(
      "\n" + "██╗    ██╗██╗   ██╗██████╗ " + "\n" +
"██║    ██║╚██╗ ██╔╝██╔══██╗" + "\n" +
"██║ █╗ ██║ ╚████╔╝ ██║  ██║" + "\n" +
"██║███╗██║  ╚██╔╝  ██║  ██║" + "\n" +
"╚███╔███╔╝   ██║   ██████╔╝" + "\n" +
" ╚══╝╚══╝    ╚═╝   ╚═════╝ "
));
});
