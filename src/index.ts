import express from 'express';
var app = express();
app.get('/', function (request: any, response: any) {
  response.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Started application on port %d', 3000);
});
