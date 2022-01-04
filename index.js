const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const {sendEmailHandler} = require('./Service/mail.reqhandler')


app.use(bodyParser.json());

app.post("/api/sendmail", async(req, res) => {
 
  const status = await sendEmailHandler(req, res);
  await res.status(200).json(status);
})

app.listen(port, function() {
  console.log("App started listening the Port", port);
})

