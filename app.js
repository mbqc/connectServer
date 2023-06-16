const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000

const sql = require("mssql");

app.use(cors());
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT,     PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
 

 

// **************** EXECUTE QUERY !!!! ****************
var  executeQuery = function(res, query){   
  sql.close()           
  sql.connect(dbConfig, function (err) {
      if (err) {   
                  console.log("Error while connecting database :- " + err);
                  res.send(err);
               }
               else {
                      var request = new sql.Request();
                      request.query(query, function (err, response) {
                        if (err) {
                                   console.log("Error while querying database :- " + err);
                                   res.send(err);
                                  }
                                  else {  res.send(response.recordset);  }
                            });  }  });   
console.log("close....");  
//sql.close()                                  
}
// **************** EXECUTE QUERY !!!! ****************
// SEND THE QUERY OVER -- 
app.get("/query", function(req , res){
var query =  decodeURIComponent("select * from TempTable");
executeQuery (res, query);
});  

app.get('/email', (req, res) => {

  const postmark = require("postmark");

// Send an email:
const client = new postmark.ServerClient("172568b1-40bf-4150-9b01-c689127dbc44");
 
client.sendEmail({ 
  "From": "michael@busmob.com", 
  "To": "michael@busmob.com",
  "Subject": "Howdy from new emailer",
  "HtmlBody": "<strong>Hello</strong> dear Postmark user. Hope all is well",
  "TextBody": "Hello from Postmark -- text action!",
  "MessageStream": "outbound"
});


})






app.get('/test', (req, res) => {
  res.send('is it here  -  yo yo yo yo yo yo yo yo yo  - ')
})

app.get('/more', (req, res) => {
  res.send('send this shit back!  more more more ')
})

app.get('/plus', (req, res) => {
  res.send('this is the plus ....  !  ')
})

 var server = app.listen(process.env.PORT || port, function () {
    var portRun = server.address().port;
    console.log("App now running on port", portRun);
 }); 


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })