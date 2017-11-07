/**
 * Created by apletea on 18.6.17.
 */
let Sequelize = require('sequelize'),
    requestMethods = require('./methods');

let attributes ={
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    timeOfSubmission : Sequelize.BIGINT,
    timeBooking : Sequelize.BIGINT,
    emp_id : Sequelize.BIGINT,
    duration : Sequelize.INTEGER
};

let options ={
    freezeTableName : true,
    timestamp : false,
    createdAt : false,
    updatedAt : false,
    instanceMethods : requestMethods
};


module.exports ={
    attributes : attributes,
    options : options
};