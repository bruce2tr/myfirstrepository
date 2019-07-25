// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
  selectQuote();
}

function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Insp Quote, Path Hit: " + request.url);
  selectQuote();
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

var quotes = [
  "Some people dream of success, other wake up and do the work",
  "Whether you think you can or can't, you are right",
  "It's always darkest before the dawn", 
  "Insp quote 4",
  "Insp quote 5"
]

function selectQuote(){
var index = Math.floor(Math.random()*5);
response.end("Your quote is: " + quotes[index] + ".");

}

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:%s" + PORT1);
 
});

server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server two is listening on: http://localhost:%s" + PORT2);
  
});