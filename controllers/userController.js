'use strict';

const userService = require('../services/userService');

exports.createUser = function(req,res) {
    const service = new userService();
    service.createUser(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};

exports.getUserInfo = function(req,res) {
    const service = new userService();
    service.getUserInfo(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};

exports.editProfile = function(req,res) {
    const service = new userService();
    service.editProfile(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};