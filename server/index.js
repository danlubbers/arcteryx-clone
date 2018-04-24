const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');
      controller = require('./controller');

require('dotenv').config();


const app = express();

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db=>{
      app.set('db', db);
})

app.use(bodyParser.json());

// Add Endpoints here:
app.get(`/api/getAllProducts`, controller.products);
app.get(`/api/getOneProduct:id`, controller.product);


const port = 3500;
app.listen(port, ()=>{console.log(`1984 is listening on PORT: ${port}`)});