'use strict';

const chatRoomService = require('../services/chatRoomService');

exports.getChatRoomMessage = function(req,res) {
    const service = new chatRoomService();
    service.getChatRoom(req, function(result){
        res.set('Content-Type','application/json');
        res.send(result)
    });
};