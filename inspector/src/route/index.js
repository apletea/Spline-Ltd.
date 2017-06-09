/**
 * Created by apletea on 9.6.17.
 */
let express = require('express');
let fs = require('fs');

module.exports = (app,passport) => {

    fs.readdirSync(__dirname).forEach(function(file){

        if(file == 'index.js') return;

        let name = file.substr(0, file.indexOf('.'));
        let module = require('./' + name)(express,passport);
        app.use('/api/'+name,module);

    });

};