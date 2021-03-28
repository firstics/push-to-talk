'use strict';

const chatMsgService = require('../services/chatMsgService');

exports.sendMessage = function(req,res) {
    const service = new chatMsgService();
    service.sendMsg(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};

exports.sendAudioMessage = function(req,res) {
    const service = new chatMsgService();
    service.sendAudioMsg(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};