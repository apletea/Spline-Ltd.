/**
 * Created by apletea on 18.6.17.
 */
const moment = require('moment');

module.exports = {

    timestampToDatetime: (timestamp) => {
        const v = moment(timestamp * 1000);
        return v.isValid() ? v.format("YYYY-MM-DD HH:mm:ss") : null;
    },

    datetimeToTimestamp: (datetime) => {
        if (!datetime) {
            return 0;
        }
        return moment(datetime).unix();
    },

    diffFromNow: (timestamp) => {
        return moment().unix() - timestamp;
    },

    timestampNow: () => {
        return moment().unix();
    },

    datetimeToDate: (datetime) => {
        return datetime ? moment(datetime).format("YYYY-MM-DD") : null;
    },

    timestampToHM : (timestamp) => {
        let dateTime = moment(timestamp*1000).format("YYYY-MM-DD HH:mm:ss");
        let time = dateTime.split(' ')[1];
        return time.split(':')[0]+time.split(':')[1];
    }
};