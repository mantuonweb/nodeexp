
"use strict";
const express = require("express");
const compression = require("compression");
var proxy = require('express-http-proxy');


const _port = 3000;
const _applicationId = "expwithnode"
const _app_folder = 'expwithnode';

const app = express();
app.use(compression());


// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
// app.all(_applicationId+"/"+'*', function (req, res) {
//     console.log(req.path,'child')
//     res.status(200).sendFile(`/`, {root: _app_folder});
// });
app.all('*', function (req, res) {
    console.log(req.path,getFileExtension(req.path));
    let fileType = getFileExtension(req.path);
    let allowedType = ["js","css","ico"];
    if(allowedType.includes(fileType)){
        let fileName = req.path.replace(`/${_applicationId}`,'')
        res.status(200).sendFile(`${fileName}`, {root: _app_folder});
    }
    else{
        res.status(200).sendFile(`/`, {root: _app_folder});
    }
});
app.use(_applicationId+"/*.*", express.static(__dirname + "/app/js"));
// // ---- SERVE STATIC FILES ---- //
// app.get(_applicationId +"/" +'*.*', express.static(_app_folder, {maxAge: '1y'}));

// // ---- SERVE APLICATION PATHS ---- //
// app.all(_applicationId +"/" +'*', function (req, res) {
//     res.status(200).sendFile(`/`, {root: _app_folder});
// });
//app.use('/'+_app_folder, proxy('www.google.com'));
// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});

function getFileExtension(filename){
    if(filename.indexOf(".")>0){
        return filename.split('.').pop();
    }
    return '';
}