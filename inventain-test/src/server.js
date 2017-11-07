/**
 * Created by apletea on 18.6.17.
 */
'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    setUpRoutes = require('./route'),
    helmet = require('helmet'),
    app = express();
const config = require('../config');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());
app.use(helmet());

setUpRoutes(app);

app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}, NODE_ENV = ${process.env.NODE_ENV}!`);
});


module.exports = app;