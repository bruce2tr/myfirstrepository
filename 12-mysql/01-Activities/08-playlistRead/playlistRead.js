var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  // password: "",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //queryAllSongs();
});

// function queryAllSongs() {
//   connection.query("SELECT * FROM songs", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     // for (var i = 0)
//     connection.end();
//   });


function createSong(){
  console.log("Adding a new song\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Happy Birthday",
      artist: "People",
      genre: "Parties"
    },
    function(err,res) {
      if (err) throw err;
      console.log(res.affectedRows + " song!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSong();
    }
 

  )};

  function updateSong(){
    console.log("Updating the songs table\n");
//       var query = connection.query(
//         "UPDATE songs SET ? WHERE ?",
//         [ {
//           artist: ""
        };
// ;


 // function updateProduct() {
    //   console.log("Updating all Rocky Road quantities...\n");
    //   var query = connection.query(
    //     "UPDATE products SET ? WHERE ?",
    //     [
    //       {
    //         quantity: 100
    //       },
    //       {
    //         flavor: "Rocky Road"
    //       }
    //     ],
    //     function(err, res) {
    //       if (err) throw err;
    //       console.log(res.affectedRows + " products updated!\n");
    //       // Call deleteProduct AFTER the UPDATE completes
    //       deleteProduct();
    //     }
    //   );












// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }

// }






