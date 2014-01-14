var express = require('express')
  , http    = require('http')
  , fs      = require('fs')
  , sass    = require('node-sass')
  , boardingPass = require('../index.js');

var app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'jade');

var compileSass = function (req, res, next) {
  var inputFile  = __dirname + '/style.scss',
      outputFile = __dirname + '/public/style.css';
  sass.render({
    file: inputFile,
    success: function (css) {
      fs.writeFile(outputFile, css, function() {
        log('render', outputFile);
        next();
      });
    },
    error: function (err) {
      logError('ERROR', err);
      next();
    },
    includePaths: boardingPass.includePaths
  });
};

app.use(compileSass);
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ' + app.get('port'));
});

// loggers
function log (key, val) {
  console.error('  \033[90m%s :\033[0m \033[36m%s\033[0m', key, val);
}
function logError (key, val) {
  console.error('  \033[31m\033[40m%s\033[0m :\033[0m \033[36m%s\033[0m', key, val);
}
