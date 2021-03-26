'use strict';

const dealService = require('../services/dealService');

exports.createAdmin = function(req,res) {
    const service = new dealService();
    service.searchDeal(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};

exports.getAdminDetail = function(req,res) {
    const service = new dealService();
    service.searchDeal(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};