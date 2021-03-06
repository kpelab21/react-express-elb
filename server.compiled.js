"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var PORT = process.env.PORT || 5000;
var app = (0, _express["default"])();
app.use("/", _express["default"]["static"](_path["default"].join(__dirname, 'client', 'build'))); //app.get('/', (req, res) => {
//  res.send('Welcome to server.js');
// });

app.get('/user', function (req, res) {
  res.json({
    name: 'Kevin E',
    age: '20'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
