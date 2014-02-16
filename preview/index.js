var express = require('express')
  , http    = require('http')
  , sass    = require('node-sass')
  , boardingPass = require('../index.js');

var app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'jade');

var sassMiddleware = sass.middleware({
  src: __dirname + '/sass'
, dest: __dirname + '/public'
, debug: true
, includePaths: boardingPass.includePaths
});

app.use(sassMiddleware);
app.use(app.router);
app.use(express.static(__dirname + '/public'));

var renderWith = function(stylesheet) {
  return function (req, res) {
    res.render('templates/index', { stylesheet: stylesheet });
  };
};

app.get('/', renderWith('style'));
app.get('/typography', renderWith('typography'));

http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});
