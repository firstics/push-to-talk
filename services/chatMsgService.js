'use strict';
const sendMsgReq = require('../models/requesters/chatMsgRequesters/sendMsgReq')
const sendAudioReq = require('../models/requesters/chatMsgRequesters/sendAudioReq')
const getAllMsgReq = require('../models/requesters/chatMsgRequesters/getAllMsgReq')


const sendMessageResponder = require('../models/responders/chatMsgResponders/sendMessageResponder')
const messageResponder = require('../models/responders/chatMsgResponders/messageResponder')
const audioResponder = require('../models/responders/chatMsgResponders/audioResponder')
const getAllMsgResponder = require('../models/responders/chatMsgResponders/getAllMsgResponder')

const chatMsgRepository = require('../repositories/chatMsgRepository')
const userRepository = require('../repositories/userRepository')

const mp3Duration = require('mp3-duration');

module.exports = function chatMsgService() {
    this.sendMsg = function(req, callback){
        let resp = new sendMessageResponder();
        const requesters = new sendMsgReq(req.body.message,req.body.messageType, req.body.sentBy, req.body.chatRoomId);
        
        const chatMsgRepo = new chatMsgRepository();
        chatMsgRepo.saveMsg(requesters, function(result){
            if(result != ""){
                resp.setMessageSent(true);
            }
            callback(resp);
        })
    }

    this.sendAudioMsg = function(req, callback){
        let resp = new audioResponder();
        const requesters = new sendAudioReq(req.body.message,req.body.messageType, req.body.sentBy, req.body.chatRoomId, 
                                            req.body.file);
        
        mp3Duration(req.body.file, function (err, duration) {
            if (err) return console.log(err.message);
            else {
                if(duration > 60){
                    resp.setErrors("Your record length is more than 1 minutes")
                }
                else{
                    const chatMsgRepo = new chatMsgRepository();
                    chatMsgRepo.saveAudioMsg(requesters, duration, function(deals){
                        resp.setDeals(deals);
                    })
                }
            }
        });
        callback(resp);
    }

    this.getAllMsg = function(req, callback){
        let resp = new getAllMsgResponder();
        const requesters = new getAllMsgReq(req.body.chatRoomId,req.body.userId);
        
        const chatMsgRepo = new chatMsgRepository();
        const userRepo = new userRepository();
        userRepo.getUserInfo(requesters.getUserId(), function(result){
            if(result != ""){
                chatMsgRepo.getAllMsg(requesters, function(result){
                    if(result != ""){
                        resp.setMessages(JSON.stringify(result));
                    }
                })
            }
            else{
                resp.setErrors("Not have a permission");
            }
            callback(resp);
        })
        
    }
}