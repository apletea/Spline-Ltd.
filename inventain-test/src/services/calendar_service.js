/**
 * Created by apletea on 18.6.17.
 */
let dateUtil = require('../utils/date'),
    officeService = require('./office_service'),
    Model = require('../model/models');

function groupByDays(requests) {
    return new Promise(resolve => {
        let ans ={};
        let grouping = requests.map(request => {
            let day = dateUtil.datetimeToDate(dateUtil.timestampToDatetime(request.timeBooking));
            if (ans[day]){
                ans[day].push(request);
            }
            else{
                ans[day] = [];
                ans[day].push(request);
            }
        });
        Promise.all(grouping).then(() => {
            resolve(ans);
        })
    })
}


function dayShedule(requestsForDay) {
    return new Promise(resolve => {
        officeService.getOfficeTime().then(officetime => {
            let officeStartWorks = officetime.to;
            let officeEndWorks = officetime.from;
            let leftedRequest = [];
            for (let i = 0; i < requestsForDay.length; ++i) {
                if (dateUtil.timestampToHM(requestsForDay[i].timeBooking) >= officeStartWorks && +dateUtil.timestampToHM(requestsForDay[i].timeBooking) + +requestsForDay[i].duration*100 <= officeEndWorks)
                    leftedRequest.push(requestsForDay[i]);
            }
            Promise.all(leftedRequest).then(() => {
                let comparator = function (_a, _b) {
                    return _a.timeOfSubmission - _b.timeOfSubmission;
                };
                leftedRequest.sort(comparator);
                let shedule = [];
                for (let i = leftedRequest.length - 1; i>=0;--i){
                    if (shedule.length === 0) {
                        shedule.push(leftedRequest[i]);
                    }
                    else{
                        if (+dateUtil.timestampToHM(shedule[shedule.length-1].timeBooking) > +dateUtil.timestampToHM(leftedRequest[i].timeBooking) && +dateUtil.timestampToHM(shedule[shedule.length-1].timeBooking) > +dateUtil.timestampToHM(leftedRequest[i].timeBooking) + +leftedRequest[i].duration*100)
                             shedule.push(leftedRequest[i]);
                    }
                }
                shedule.sort(comparator);
                resolve(shedule);
            })
        })
    })
}

function constractShedule(requests) {
    return new Promise(resolve => {
        groupByDays(requests).then(groupingRequests => {
            let keys = Object.keys(groupingRequests);
            let sheduleFordays = keys.map(key => {
                 return dayShedule(groupingRequests[key])
            });
            Promise.all(sheduleFordays).then(shedule => {
                resolve(shedule);
            })
        })
    })
}

module.exports = {
  getCalendar : function () {
      return new Promise((resolve,reject) => {
          Model.Request.findAll().then(requests => {
              constractShedule(requests).then(calendar => {
                  resolve(calendar);
              })
          }).catch(err => {
              reject(err);
          })
      })
  }
};