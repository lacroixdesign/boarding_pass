var path = require('path');

function buildLoadPaths() {
  var neatPaths         = require('node-neat').loadPaths;
  var boardingPassPaths = path.join(__dirname, 'app/assets/stylesheets');
  return neatPaths.concat(boardingPassPaths);
}

module.exports = {

  loadPaths: buildLoadPaths()

};
