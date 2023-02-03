import express from 'express';
import * as dotenv from 'dotenv';
var app = express();
const result = dotenv.config({ debug: true });

// If is there a any error in dotenv config
if (result.error) {
  throw result.error;
}

const port = process.env.PORT || 3000;
app.get('/', function (request: any, response: any) {
  response.send('Hello World!');
});
app.listen(port, function () {
  console.log(`Started application on port:${port}`);
});
