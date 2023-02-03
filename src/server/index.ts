import express from 'express';
import * as dotenv from 'dotenv';
import router from '../router/api';
var app = express();
const result = dotenv.config({ debug: true });

// If is there a any error in dotenv config
if (result.error) {
  throw result.error;
}

app.use('/api/v1', router);

const port = process.env.PORT || 3000;
app.get('/', function (request: any, response: any) {
  response.send('Hello World!');
});
app.listen(port, function () {
  console.log(`Started application on port:${port}`);
});
