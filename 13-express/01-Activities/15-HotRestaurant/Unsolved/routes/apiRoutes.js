var tableData = require("../tableData");
var waitListData = require("../waitingListData.js");
var path = require("path");

module.exports = function(app) {
  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitListData);
  });

  app.post("/api/tables", function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true); // KEY LINE
    }

    // Or false if they don't have a table
    else {
      waitListData.push(req.body);
      res.json(false); // KEY LINE
    }
  });
};
