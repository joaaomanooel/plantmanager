const component = require('./templates/component');
const screen = require('./templates/screen');

module.exports = function (plop) {
  component(plop);
  screen(plop);
};
