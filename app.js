const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000

app.use(cors());
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT,     PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
 


app.get('/test', (req, res) => {
  res.send('is it here  -  yo yo yo yo yo yo yo yo yo  - ')
})

app.get('/more', (req, res) => {
  res.send('send this shit back!')
})

app.get('/plus', (req, res) => {
  res.send('should refresh ... and more refreshing !  ')
})

 var server = app.listen(process.env.PORT || port, function () {
    var portRun = server.address().port;
    console.log("App now running on port", portRun);
 }); 


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })