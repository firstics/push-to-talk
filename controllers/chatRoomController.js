'use strict';

const chatRoomService = require('../services/chatRoomService');

exports.getReport = function(req,res) {
    const service = new chatRoomService();
    service.getReport(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};

exports.createChatRoomMessage = function(req,res) {
    const service = new chatRoomService();
    service.createRoom(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};

exports.listAllRoom = function(req,res) {
    const service = new chatRoomService();
    service.listAllRoom(req, function(result){
        res.set('Content-Type','application/json');
        if(result.getErrors() != null){
            res.status(400)
        }
        res.send(result)
    });
};