/**
 * Created by apletea on 9.6.17.
 */
'use strict';

let Sequelize = require('sequelize');
let hooks = require('./hooks');

let attributes = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: Sequelize.STRING,
    role: Sequelize.INTEGER,
    jwt_token: Sequelize.STRING,
    profile_id : Sequelize.BIGINT
};

let options = {
    hooks: hooks,
    freezeTableName: true,
    timestamps: false,
    instanceMethods: {
        getFullInfo: function() {
            let self = this;
            return new Promise(resolve => {
                resolve({
                    id : self.id,
                    email : self.email,
                    role : self.role,
                    profile_id: self.profile_id
                })
            });
        }
    }
};

module.exports = {
    attributes : attributes,
    options : options
};