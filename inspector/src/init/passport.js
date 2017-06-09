/**
 * Created by apletea on 9.6.17.
 */
'use strict';

let Model = require('../model/models'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    secretOrKey = require('../../config').secretOrKey;

module.exports = passport => {

    let options = {
        secretOrKey: secretOrKey,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    };
    console.log(options.jwtFromRequest);
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
            let query = {};
            if (jwt_payload.vk_id){
                query.vk_id = jwt_payload.vk_id;
            }

            Model.User.findOne({where:query})
                .then( user => {
                    if (!user){
                        done(null,false);
                        return;
                    }

                    done(null, user);
                })
        }
    ));
}