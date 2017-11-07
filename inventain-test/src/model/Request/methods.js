/**
 * Created by apletea on 18.6.17.
 */
let dateUtil = require('../../utils/date');

module.exports = {
    getFullInfo : function () {
        let self = this;
        return new  Promise(resolve => {
            resolve({
                timeOfSubmission : dateUtil.timestampToDatetime(self.timeOfSubmission),
                timeBooking: dateUtil.timestampToDatetime(self.timeBooking),
                emp_id : "EMP"+self.emp_id,
                duration : self.duration
            });
        })
    }
};