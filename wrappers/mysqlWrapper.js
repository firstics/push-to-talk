'use strict';

const mysql = require('mysql');
const config = require('../configs/config-dev.json');


 module.exports = function mySQLWrapper(){
    var connection = mysql.createConnection({
        host: config.mysql.host,
        user: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.database
    });

    connection.connect(function(err){
        if (err) throw err;
        console.log("MySQL Connected!");
    });

    this.query = function(sql, callback){
        connection.query(sql, function ( error, results, fields ){
            {
                if ( error ) 
                {
                    console.log ( error );
                }
                else 
                {            
                    console.log(results);
                            
                    callback(results);
                }
            }
        })  
    }
 }