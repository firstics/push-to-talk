'use strict';

const dealService = require('../services/dealService');

exports.saveRecordFile = function(req,res) {
    const service = new dealService();
    service.searchDeal(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};

exports.getRecordFile = function(req,res) {
    const service = new dealService();
    service.searchDeal(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};