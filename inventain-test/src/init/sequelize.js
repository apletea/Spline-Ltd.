/**
 * Created by apletea on 18.6.17.
 */

const Sequelize = require('sequelize'),
    config = require('../../config');


module.exports = new Sequelize(config.database.database, {logging:false});