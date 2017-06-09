/**
 * Created by apletea on 9.6.17.
 */
let errorUtil = require('../utils/error').errorCodes,
    responseUtil = require('../utils/response'),
    Model =require('../model/models'),
    authHelper = require('../utils/auth');


module.exports = (express,passport) => {
    let router =  express.Router();

    router.get('/test',(req,res) => {
        let user = {vk_id : "12341134",password:"qwerty",role:1};
        Model.User.create(user).then(newUser => {
            return res.json(responseUtil.getSuccessResponseJsonObject(newUser));
        }).catch(err => {
            return res.json(responseUtil.getErrorResponseJsonObject(errorUtil.ERR_UNKNOWN,err));
        })
    });

    router.get('/test2', authHelper.allowForUsers(passport),(req,res) => {
        let user = req.user;
        user.getFullInfo().then(info => {
            return res.json(info)
        }).catch(err => {
            return res.json(responseUtil.getErrorResponseJsonObject(errorUtil.ERR_UNKNOWN,err));
        })
    });

    return router;
};