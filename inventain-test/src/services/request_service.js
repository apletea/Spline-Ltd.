/**
 * Created by apletea on 18.6.17.
 */
let Model = require('../model/models');

module.exports = {

  addRequest : function (request) {
      return new Promise((resolve, reject) => {
          Model.Request.create(request).then((request) => {
              request.getFullInfo().then(info => {
                  resolve(info);
              })
          }).catch(err => {
              reject(err);
          })
      })
  }

};