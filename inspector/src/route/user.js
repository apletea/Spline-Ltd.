/**
 * Created by apletea on 10.6.17.
 */
/**
 * Created by apletea on 9.6.17.
 */
let errorUtil = require('../utils/error').errorCodes,
    responseUtil = require('../utils/response'),
    Model =require('../model/models'),
    authHelper = require('../utils/auth');

let createUserProfile = () => {

};

module.exports = (express,passport) => {
    let router =  express.Router();

    router.post('/registration',(req,res) => {
        let accessToken = req.body.access_token;
        let accessTokenSecret = req.body.access_token_secret;


    });

    

    return router;
};