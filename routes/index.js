var express= require('express');
var router = express.Router();
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'guillermo1',
    database : 'numeros'
});

connection.connect();
connection.on('connect', function() {
    console.log("Conectado con la DB");
});


router.get('/', function(req, res, next) {
  res.redirect("/resultados.html");
});

router.get('/encuesta', function(req, res, next) {
    let ans = [];
    /***Callback de la muerte**********/
    connection.query('SELECT max(cnat) as cantidad from dominos', function (err, rows, fields) {
        ans.push(  { label: "Dominos",  y: parseInt(rows[0].cantidad)  ,  indexLabel: rows[0].cantidad.toString() } );
        connection.query('SELECT max(cnat) as cantidad from pizzahut', function (err, rows, fields) {
            ans.push(  { label: "Pizza Hut",  y: parseInt(rows[0].cantidad)  ,  indexLabel: rows[0].cantidad.toString() } );
            connection.query('SELECT max(cnat) as cantidad from papajohn', function (err, rows, fields) {
                ans.push(  { label: "Papa Johns",  y: parseInt(rows[0].cantidad)  ,  indexLabel: rows[0].cantidad.toString()} );
                res.json(ans);
            });
        });
    });

});


module.exports = router;
