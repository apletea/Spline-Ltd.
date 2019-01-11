/**
 * Created by apletea on 18.6.17.
 */
'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    setUpRoutes = require('./route'),
    passport = require('passport'),
    setUpPassport = require('./init/passport'),
    helmet = require('helmet'),
    app = express();
const config = require('../config');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());

setUpPassport(passport);
setUpRoutes(app, passport);

app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}, NODE_ENV = ${process.env.NODE_ENV}!`);
});


module.exports = app;