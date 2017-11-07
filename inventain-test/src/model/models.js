/**
 * Created by apletea on 18.6.17.
 */
let OfficeMeta = require('./Office'),
    RequestMeta = require('./Request');

const connection = require('../init/sequelize');

let Office = connection.define('office', OfficeMeta.attributes, OfficeMeta.options),
    Request = connection.define('request', RequestMeta.attributes, RequestMeta.options);


module.exports = {
    Office : Office,
    Request : Request
};