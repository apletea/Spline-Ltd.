/**
 * Created by apletea on 9.6.17.
 */
'use strict';

let authHelper = require ('../../utils/auth');

let beforeCreate = (user, options) => {
    return new Promise ((resolve, reject) => {

        if (user.email)
            user.email = user.email.trim().toLowerCase();
        if (user.password)
            user.password = user.password.toString();

        user.jwt_token = authHelper.getJwtToken({vk_id: user.vk_id, password: user.password});

        if (!user.password)
            resolve();
        authHelper.hashPassword(user.password, (err, hashedPassword) =>{
            if (err)
                reject(err);
            user.password = hashedPassword;
            resolve();
        });
    });
};

module.exports = {
    beforeCreate: beforeCreate
};