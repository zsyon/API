import express from 'express';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var app = express();
const port = process.env.PORT || 3000;
app.get('/', function (request: any, response: any) {
  response.send('Hello World!');
});
app.listen(port, function () {
  console.log(`Started application on port:${port}`);
});
