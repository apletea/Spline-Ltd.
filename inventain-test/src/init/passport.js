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
        of (jwt_payload.MAIN_OFFICE_ID){
            query.id = jwt_payload.MAIN_OFFICE_ID;
        }

        Model.Office.findOne({where: query})
            .then( office => {
                if (!office){
                    done(null, false);
                    return;
                }

                done(null, office);
            })
        }
    ));

};