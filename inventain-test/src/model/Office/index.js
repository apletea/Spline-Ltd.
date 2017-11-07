/**
 * Created by apletea on 18.6.17.
 */

let Sequelize = require('sequelize'),
    officeMethods = require('./methods');

let attributes = {
    id: {
        allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
    },
    to : Sequelize.INTEGER,
    from : Sequelize. INTEGER
};

let options = {
    freezeTableName : true,
    timestamp : false,
    createdAt : false,
    updatedAt : false,
    instanceMethods : officeMethods
};


module.exports = {
    attributes : attributes,
    options : options
};