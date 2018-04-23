const express = require('express'),
      bodyParser = require('body-parser');
      // controller = require('controller');


const app = express();

app.use(bodyParser.json());

// Add Endpoints here:


const port = 3500;
app.listen(port, ()=>{console.log(`1984 is listening on PORT: ${port}`)});