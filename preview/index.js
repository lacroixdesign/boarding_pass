var express = require('express')
  , http    = require('http')
  , path    = require('path')
  , sass    = require('node-sass')
  , boardingPass = require('../index.js');

var app = module.exports = express();

var sassServer = sass.middleware({
  src:   __dirname
, dest:  __dirname + '/public'
, debug: true
, includePaths: boardingPass.includePaths
});

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(sassServer);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});
