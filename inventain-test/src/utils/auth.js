let jwt = require('jwt-simple'),
    request = require('request'),
    md5 = require('md5'),
    secretOrKey = require('../../config').secretOrKey;

const compose = require('composable-middleware');
const errorUtil = require('./error');
const responseUtil = require('./response');

let getJwtToken = office => {
    console.log(office);
    return `JWT ${jwt.encode(office, secretOrKey)}`;
};

let allowForUsers = (passport) => {
    return passport.authenticate('jwt', {session : false});
};



module.exports = {
    getJwtToken: getJwtToken,
    allowForUsers : allowForUsers
};