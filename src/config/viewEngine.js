const express = require("express");
const path = require('path')   //commonjs

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    //config static files: images/css/js
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;