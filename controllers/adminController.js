'use strict';

const adminService = require('../services/adminService');

exports.createAdmin = function(req,res) {
    const service = new adminService();
    service.createUser(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};

exports.getAdminDetail = function(req,res) {
    const service = new adminService();
    service.getUserInfo(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};