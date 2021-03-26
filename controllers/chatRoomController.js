'use strict';

const dealService = require('../services/dealService');

exports.getChatRoomMessage = function(req,res) {
    const service = new dealService();
    service.searchDeal(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};