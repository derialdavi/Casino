const User = require('../models/User');
const MySqlUser = require('../models/MySqlUser');
const mysql = require('mysql');

let findUsersWhereEmail = 'SELECT * from `users` WHERE `users`.`email` = ?';


/**
 * 
 * @param {String} host 
 * @param {String} user
 * @param {String} password 
 * @param {String} db_name 
 * @returns {import("mysql").Connection} Connection object
 */
function dbConnection(host, user, password, db_name) {
    let con = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: db_name
    });

    con.connect(err => {
        if (err) throw err;
        console.log('connected to database ' + db_name + ' at ' + user + '@' + host);
    })
    return con;
}

/**
 * 
 * @param {import("mysql").Connection} con 
 * @param {User} user 
 */
async function addUserToDb(con, user) {
    let sql = 'INSERT INTO `users`(name, surname, username, email, password, birth, money, image, role) VALUES (?)';
    let values = [
        user.name,
        user.surname,
        user.username,
        user.email,
        user.password,
        user.birth,
        user.money,
        user.image,
        user.role
    ];
    con.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log('Inserted ' + result.affectedRows + ' user');
    })
}

/**
 * 
 * @param {import("mysql").Connection} con 
 * @param {String} email
 * @returns true if the user exists in the database, false otherwise
 */
function checkIfUserInDb(con, email) {
    return new Promise((resolve, reject) => {
        con.query(findUsersWhereEmail, [email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.length > 0);
            }
        });
    });
}

/**
 * 
 * @param {import("mysql").Connection} con 
 * @param {String} email
 * @returns  new instance of class MySqlUser with the datas of the user 
 */
function getUser(con, email) {
    return new Promise((resolve, reject) => {
        con.query(findUsersWhereEmail, [email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(new MySqlUser(
                    result[0].name,
                    result[0].surname,
                    result[0].username,
                    result[0].email,
                    result[0].password,
                    result[0].birth,
                    result[0].money,
                    result[0].image,
                    result[0].role
                ));
            }
        });
    });
}

module.exports = { dbConnection, addUserToDb, checkIfUserInDb, getUser, MySqlUser }