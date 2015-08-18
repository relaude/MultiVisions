var express = require('express'),
    stylus = require('stylus'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

var bodyParser = require('body-parser');
var logger = require('express-logger');

module.exports = function(app, config){
    function compile(str, path){
        return stylus(str)
            .set('filename',path);
    }

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine','jade');
    app.use(logger({path: "/server/logfile.txt"}));
    app.use(cookieParser());
    app.use(bodyParser.json());

    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(stylus.middleware(
        {
            src : config.rootPath + '/public',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/public'));
}