
///this code is working!!!!
var mysql = require("mysql");

// connection for the SQL database
var connection = mysql.createConnection({
 host: "localhost",
 port: 3306,
 user: "root",
//  password: "",
 database: "top_songsDB"
});

connection.connect(function(err) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId + "\n");
 readtopsongs();
});

function readtopsongs() {
   connection.query("SELECT * FROM top5000 LIMIT 5", function(err, res) {
       if (err) throw err;

       // console.log() of all resuls
       console.log(res);

       //end of connection
       connection.end();
     });
   }