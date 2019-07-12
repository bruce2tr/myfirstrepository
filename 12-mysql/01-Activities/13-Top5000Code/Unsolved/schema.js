var mysql = require("mysql");
var inquirer = require("inquirer");

// connection for the SQL database
var connection = mysql.createConnection({
 host: "localhost",
 port: 3306,
 user: "root",
//  password: "",
 database: "top_songsDB"
});


connection.connect(function (err) {
 if (err) throw err;
 runQuery();
});

function runQuery() {
 inquirer
   .prompt({
     name: "action",
     type: "list",
     message: "What query would you like to run?",
     choices: [
       "Find songs by artist",
       "Find all artists who appear more than once",
       "Find data within a specific range",
       "Search for a specific song"
     ]
   })
   .then(function (answer) {
     switch (answer.action) {
       case "Find songs by artist":
         artistQuery();
         break;

       case "Find all artists who appear more than once":
         multiQuery();
         break;

       case "Find data within a specific range":
         rangeQuery();
         break;

       case "Search for a specific song":
         songQuery();
         break;
     }
   });
}
//function for finding a specific song by an artist
function artistQuery() {
 inquirer
   .prompt({
     name: "artist",
     type: "input",
     message: "What artist would you like to search for?"
   })
   .then(function (answer) {
     var query = "SELECT position, song, year FROM TOP5000 WHERE ?";
     connection.query(query, { artist: answer.artist }, function (err, res) {
       for (var i = 0; i < res.length; i++) {
         console.log("Position: " + res[i].position + " | Song: " + res[i].song + " | Year: " + res[i].year);
       }
       runQuery();
     });
   });
}
//function for finding data of artists that appear more than once
function multiQuery() {
 var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
 connection.query(query, function (err, res) {
   for (var i = 0; i < res.length; i++) {
     console.log(res[i].artist);
   }
   runQuery();
 });
}
//function for finding data on the table within a specified range
function rangeQuery() {
 inquirer
   .prompt([
     {
       name: "start",
       type: "input",
       message: "Enter starting position: ",
       validate: function (value) {
         if (isNaN(value) === false) {
           return true;
         }
         return false;
       }
     },
     {
       name: "end",
       type: "input",
       message: "Enter ending position: ",
       validate: function (value) {
         if (isNaN(value) === false) {
           return true;
         }
         return false;
       }
     }
   ])
   .then(function (answer) {
     var query = "SELECT position,song,artist,year FROM TOP5000 WHERE position BETWEEN ? AND ?";
     connection.query(query, [answer.start, answer.end], function (err, res) {
       for (var i = 0; i < res.length; i++) {
         console.log(
           "Position: " +
           res[i].position +
           "Song: " +
           res[i].song +
           "Artist: " +
           res[i].artist +
           "Year: " +
           res[i].year
         );
       }
       runQuery();
     });
   });
}
//function for finding a specific song from the table
function songQuery() {
 inquirer
   .prompt({
     name: "song",
     type: "input",
     message: "What song would you like to look for?"
   })
   .then(function (answer) {
     console.log(answer.song);
     connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function (err, res) {
       console.log(
         "Position: " +
         res[0].position +
         "Song: " +
         res[0].song +
         "Artist: " +
         res[0].artist +
         "Year: " +
         res[0].year
       );
       runQuery();
     });
   });
}