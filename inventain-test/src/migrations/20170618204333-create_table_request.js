'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('request',{
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
        })
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('request');
    }
};
