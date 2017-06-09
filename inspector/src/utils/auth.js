'use strict';

let bcrypt = require('bcrypt'),
	jwt = require('jwt-simple'),
	request = require('request'),
	md5 = require('md5'),
	secretOrKey = require('../../config').secretOrKey;

const compose = require('composable-middleware');
const errorUtil = require('./errors');
const responseUtil = require('./response');

let comparePassword = (password, hash, cb) => {
	bcrypt.compare(password, hash.replace(), (err, isMatch) => {
		if (err)
			return cb(err);
		cb(null, isMatch);
	});
};

let hashPassword = (pass, cb) => {
	bcrypt.genSalt(10, (err, salt) => {

		if (err)
			return cb(err);

		bcrypt.hash(pass, salt, (err, hash) => {
			if (err)
				return cb(err);

			cb(null, hash);
		});
	});
};

let getJwtToken = user => {
	return `JWT ${jwt.encode(user, secretOrKey)}`;
};
	
let allowForUsers = (passport) => {
	return passport.authenticate('jwt', {session : false});
};



module.exports = {
	comparePassword: comparePassword,
    hashPassword: hashPassword,
    getJwtToken: getJwtToken,
    allowForUsers : allowForUsers
};
