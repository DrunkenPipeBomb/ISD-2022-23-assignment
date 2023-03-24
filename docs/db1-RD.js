var mysql = require('mysql');

var connection = mysql.createConnection({
    "host"     : "mysql5.cems.uwe.ac.uk",
    "user"     : "fet22032891",
    "password" : "GJX34wrbqfTI",
    "database" : "fet22032891"
});

connection.connect(function(err){
    if (err) {
        console.error("Connection error: ", err.message)
    } else { 
        console.log("Connected as: ", connection.threadID)
    }
});

var QUERY = "SELECT * from 'cycle-network'";

connection.query(QUERY, function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(rows[i].OBJECTID, rows[i].Name);
    }
});

connection.end();
console.log("finished");