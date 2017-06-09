/**
 * Created by apletea on 9.6.17.
 */
'use strict';


const Sequelize = require('sequelize'),
    config = require('../../config');


module.exports = new Sequelize(config.database.database, {logging:false});