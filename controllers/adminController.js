'use strict';

const adminService = require('../services/adminService');

exports.createAdmin = function(req,res) {
    const service = new adminService();
    service.createUser(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};

exports.getAdminDetail = function(req,res) {
    const service = new adminService();
    service.getUserInfo(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};