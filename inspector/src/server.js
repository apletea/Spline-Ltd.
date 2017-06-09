/**
 * Created by apletea on 9.6.17.
 */
'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    setUpPassport = require('./init/passport'),
    setUpRoutes = require('./route'),
    helmet = require('helmet'),
    app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());

setUpPassport(passport);
setUpRoutes(app,passport);

app.listen(8080, () => {
    console.log('App on 8080');
});