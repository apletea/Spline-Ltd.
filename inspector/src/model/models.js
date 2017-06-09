let UserMeta = require('./User');


let connection = require('../init/sequelize');

let User = connection.define('users',UserMeta.attributes, UserMeta.options);


module.exports = {
    User : User
};