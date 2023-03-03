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