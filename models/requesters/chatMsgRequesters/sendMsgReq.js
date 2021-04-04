'use strict';

const method = sendMsgReq.prototype

function sendMsgReq(message, messageType, sentBy, chatRoomId){
    this.message = message;
    this.messageType = messageType;
    this.sentBy = sentBy;
    this.chatRoomId = chatRoomId;
}

method.getMessage = function(){
    return this.message
}

method.getMessageType = function(){
    return this.messageType
}
method.getSentBy = function(){
    return this.sentBy
}
method.getChatRoomId = function(){
    return this.chatRoomId
}

method.setMessage = function(message){
    this.message = message
}

method.setMessageType = function(messageType){
    this.messageType = messageType
}

method.setSentBy = function(sentBy){
    this.sentBy = sentBy
}

method.setChatRoomId = function(chatRoomId){
    this.chatRoomId = chatRoomId
}

module.exports = sendMsgReq;