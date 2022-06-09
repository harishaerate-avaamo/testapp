const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const moment = require('moment')
// const ngrok = require('ngrok');
app.use(express.json());

app.use(bodyParser.json());



// (async function() {
//   const url = await ngrok.connect();
// })();




app.post("/api/sample", (req, res) => {
    console.log(req.body);
    res.send({Status:"ok"});   
  });

app.get("/", (req, res) => {
    res.send({Status:"ok"});   
  });


  app.listen(PORT|| 3000, () => {
    console.log(`Server listening to port ${PORT} at ${moment()}`);
  });
