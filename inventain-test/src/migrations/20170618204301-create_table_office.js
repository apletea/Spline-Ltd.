'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('office',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            to : Sequelize.INTEGER,
            from : Sequelize. INTEGER
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('office');
    }
};
