require('dotenv').config();

var express = require('express');
var axios = require('axios');
var qs = require('qs');

/////////////////////////////////////////////////////
var mysql = require('mysql');

//for promisifying
const util = require('util');

var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

var db = util.promisify(conn.query).bind(conn);
/////////////////////////////////////////////////////


var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))



app.get('/', function (req, res) {

    res.render('home');

})





//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//                                     HELPERS                                      //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////













var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('App Started !!!');
});