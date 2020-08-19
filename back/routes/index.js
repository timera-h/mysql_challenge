var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'villes_fr'
});

connection.connect();
/* GET home page. */
router.get('/getDepartements', function (req, res, next) {
  connection.query('SELECT * FROM departement', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    res.json(results);
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
