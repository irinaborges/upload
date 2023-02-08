const mysql = require('mysql');
require("dotenv").config()

const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

function query(sql, bindings) {
    return new Promise(function (resolve, reject) {
        connection.query(sql, bindings, function (err, resultados) {
            if (err) {
                reject(err);
            } else {
                resolve(resultados);
            }
        })
    });
}
module.exports = query;