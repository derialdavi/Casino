const hbs = require('hbs')
const User = require('../models/User');
const MySqlUser = require('../models/MySqlUser');
const bodyParser = require('body-parser');
const validationUtils = require('../utils/validationUtils');
const dbUtils = require('../utils/dbUtils');
const config = require('../config/config');

let express = require('express')
let router = express.Router();


const HOST = config.database.host;
const PORT = config.database.port;
const USER = config.database.user;
const PASSWORD = config.database.password;
const DB_NAME = config.database.database_name;

let con = dbUtils.dbConnection(HOST, USER, PASSWORD, DB_NAME);

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// const isAuth = (req, res, next) => {
//     if (req.session.isAuth) {
//         const { email } = req.body;
//         const user = dbUtils.getUser(con, email);
//         return next(user, req, res);
//     }
//     else {
//         return res.redirect('/login');
//     }
// }

router.get('/', urlencodedParser, /*isAuth,*/ (req, res) => {

    // const { user } = req.user;
    // console.log(user);

    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/logValidation', urlencodedParser, (req, res) => {
    const { email, password } = req.body;

    dbUtils.checkIfUserInDb(con, email)
        .then((userExists) => {
            if (!userExists) {
                console.log('Utente non trovato in database.');
                return res.redirect('/login');
            }

            dbUtils.getUser(con, email)
                .then((user) => {
                    if (validationUtils.encrypt(password) !== user.password) {
                        console.log('Le password non corrispondono');
                        return res.redirect('/login');
                    }

                    // req.session.isAuth = true;
                    return res.redirect('/');
                })
                .catch((err) => {
                    console.log('Errore durante la query al database:', err);
                    return res.redirect('/login');
                });
        })
        .catch((err) => {
            console.log('Errore durante la query al database:', err);
            return res.redirect('/login');
        });
});

router.get('/account', (req, res) => {
    res.render('account');
});

router.get('/blackjack', (req, res) => {
    res.render('blackjack');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/registerValidation', urlencodedParser, async (req, res) => {
    const { name, surname, username, email, password, birth } = req.body;
    if (name.length >= 2 && surname.length >= 2 &&
        validationUtils.isValidEmail(email) && validationUtils.isStrongPwd(password) &&
        validationUtils.isAdult(birth)) {

        // Check if email is already registered in the databse
        if (await dbUtils.checkIfUserInDb(con, email)) {
            return res.redirect('/');
        }

        // Encrypying password
        const newPassword = validationUtils.encrypt(password);

        let user = new User(name, surname, username, email, newPassword, birth);

        try {
            await dbUtils.addUserToDb(con, user);
            return res.redirect('/');
        }
        catch {
            return res.redirect('/databaseError');
        }
    }
    else {
        console.log('errore:\n');
        console.log(name.length >= 2);
        console.log(surname.length >= 2);
        console.log(validationUtils.isValidEmail(email));
        console.log(validationUtils.isStrongPwd(password));
        console.log(validationUtils.isAdult(birth));
        return res.redirect('/register');
    }

});

router.get('/databaseError', (req, res) => {
    res.render('dberror');
});

module.exports = router;