'use strict';
const sendMsgReq = require('../models/requesters/chatMsgRequesters/sendMsgReq')
const sendAudioReq = require('../models/requesters/chatMsgRequesters/sendAudioReq')

const messageResponder = require('../models/responders/chatMsgResponders/messageResponder')
const audioResponder = require('../models/responders/chatMsgResponders/audioResponder')

const chatMsgRepository = require('../repositories/chatMsgRepository')

module.exports = function chatMsgService() {
    this.sendMsg = function(req, callback){
        let resp = new messageResponder();
        const requesters = new sendMsgReq(req.body.message,req.body.messageType, req.body.sentBy, req.body.chatRoomId);
        
        const chatMsgRepo = new chatMsgRepository();
        chatMsgRepo.saveMsg(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }

    this.sendAudioMsg = function(req, callback){
        let resp = new audioResponder();
        const requesters = new sendAudioReq(req.body.message,req.body.messageType, req.body.sentBy, req.body.chatRoomId, 
                                            req.body.file);
        
        const chatMsgRepo = new chatMsgRepository();
        chatMsgRepo.saveAudioMsg(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }
}