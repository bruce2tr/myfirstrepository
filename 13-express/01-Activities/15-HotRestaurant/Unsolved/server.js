// Require/import the HTTP module
// Require/import the HTTP module
// var http = require("http");
var express = require("express");
// var fs = require("fs");
var path = require("path");

var app = express();
var PORT = 3000;

//route server files
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/htmls/home.html"));
  });

app.get("/reserve", function(req, res) {
res.sendFile(path.join(__dirname, "/htmls/reserve.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/htmls/tables.html"));
      });

function handleRequest(request, response) {


//  response.end("It Works!! Path Hit: " + request.url);
}


// var server = http.createServer(handleRequest);


app.listen(PORT, function() {


 console.log("Server listening on: http://localhost:%s" + PORT);
});

