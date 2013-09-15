var path = require('path');

function getPaths() {
  var neatPaths         = require('node-neat').includePaths;
  var boardingPassPaths = path.join(__dirname, 'app/assets/stylesheets');
  return neatPaths.concat(boardingPassPaths);
}

module.exports = {

  includePaths: getPaths()

};
