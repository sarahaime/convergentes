var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'sarahaime123',
    database : 'numeros'
});

connection.connect();

connection.query('SELECT cnat from pizzahut', function(err, rows, fields) {
    if (!err)
        console.log('The solution is pizzahut: ', rows);
    else
        console.log('Error while performing Query.');
});
connection.end();

connection.connect();

connection.query('SELECT cnat from dominos', function(err, rows, fields) {
    if (!err)
        console.log('The solution is dominos: ', rows);
    else
        console.log('Error while performing Query.');
});
connection.end();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/resultados.html");
});


module.exports = router;
