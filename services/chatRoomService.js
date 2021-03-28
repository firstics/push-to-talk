'use strict';
const getChatRoomReq = require('../models/requesters/chatRoomRequesters/getChatRoomReq')

const chatRoomResponder = require('../models/responders/chatRoomResponders/chatRoomResponder')
const chatRoomRepository = require('../repositories/chatRoomRepository')

module.exports = function chatRoomService() {
    this.getChatRoom = function(req, callback){
        let resp = new chatRoomResponder();
        const requesters = new getChatRoomReq(req.body.roomId);
        
        const chatRoomRepo = new chatRoomRepository();
        chatRoomRepo.getChatRoom(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }
}