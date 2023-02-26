const logger = require('morgan');
const express = require('express');
const config = require('./config/config');
const createError = require('http-errors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const indexRouter = require('./routes/index');

let app = express();

const DB_HOST = config.database.host;
const DB_PORT = config.database.port;
const DB_USER = config.database.user;
const DB_PASSWORD = config.database.password;
const DB_NAME = config.database.database_name;

// let store = new MySQLStore({
//     uri: DB_HOST,
//     port: DB_PORT,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     database: DB_NAME
// })

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(session({
//     secret: 'ugM27uf2D58vmC625Wt8',
//     resave: false,
//     cookie: {
//         sameSite: 'strict'
//     },
//     store: store
// }));

app.use('/', indexRouter);

// app.use((req, res, next) => {
//     next(createError(404));
// })

// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     res.status(err.status || 5000);
//     res.render('error');
// })

module.exports = app;

const SERVER_HOST = config.server.host;
const SERVER_PORT = config.server.port;

app.listen(SERVER_PORT, () => {
    console.log('Server at ' + SERVER_HOST + ':' + SERVER_PORT);
})