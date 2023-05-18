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
 

var dbConfig = {
  user:  'test',
  password: '1234',
  server: '69.70.232.234',
  database: 'dbZytco_II', // 'ZYT_DEV_II' //'dbBBBB' //  'back_II'   test  //  
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  },
}; 

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



app.get('/test', (req, res) => {
  res.send('is it here  -  yo yo yo yo yo yo yo yo yo  - ')
})

app.get('/more', (req, res) => {
  res.send('send this shit back!  more more more ')
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