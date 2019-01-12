/**
 * Created by apletea on 18.6.17.
 */
'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    passport = require('passport'),
    setUpRoutes = require('./route'),
    setUpPassport = require('./init/passport'),
    sheduler = require('./utils/mailer'),
    app = express();


const config = require('../config');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());
sheduler.sheduler.start();
setUpPassport(passport);
setUpRoutes(app, passport);

app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}, NODE_ENV = ${process.env.NODE_ENV}!`);
});


module.exports = app;