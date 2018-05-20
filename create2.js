'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
});
// cleate a Database
connection.query('CREATE DATABASE node', function(err) {
    if (err) {
        console.log('Could not create database "node".');
    }
});
// use it
connection.query('USE node', function(err) {
if (err) {
    console.log('Could not switch to database "node".');
}
});
// create table "test" inside the used database
connection.query('CREATE TABLE test ' +
                '(id INT(11) AUTO_INCREMENT, ' +
                 ' content  varchar(255), ' +
                 ' PRIMARY KEY(id))',
    function(err) {
        if(err) {
            console.log('could not create table "test".');
        }
    }
);

connection.query('INSERT INTO test (content) VALUES ("hello")');
connection.query('INSERT INTO test (content) VALUES ("world")');

connection.end();
