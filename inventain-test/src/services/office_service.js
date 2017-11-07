/**
 * Created by apletea on 18.6.17.
 */
let Model = require('../model/models'),
    officeConstants = require('../constants/office');

module.exports = {

    setOfficeTime: function (time) {
        return new Promise((resolve,reject) => {
            Model.Office.find({where : {id : officeConstants.MAIN_OFFICE_ID}})
                .then(officeTime => {
                    officeTime.update(time).then(newTime => {
                        newTime.getFullInfo().then(info => {
                            resolve(info);
                        })
                    })
                }).catch(err => {
                    reject(err);
            })
        })
    },

    createOfficeTime : function (time) {
        return new Promise((resolve,reject) => {
            Model.Office.create(time).then(newOfficetime => {
                newOfficetime.getFullInfo().then(info => {
                    resolve(info);
               })
            }).catch(err => {
                reject(err);
            })
        })
    },

    getOfficeTime: function () {
        return new Promise((resolve,reject) => {
            Model.Office.find({where : {id : officeConstants.MAIN_OFFICE_ID}})
                .then(officeTime => {
                    if (officeTime)
                    officeTime.getFullInfo().then(info => {
                        resolve(info);
                    });
                    else
                        resolve(officeTime);
                }).catch(err => {
                    reject(err);
            })
        })
    }
};