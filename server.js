require('dotenv').config();
var app = require('./app');
var port = process.env.PORT;
if (port == null || port == '') {
  port = 3002;
}


app.listen(port, function() {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port ' + port);
});
