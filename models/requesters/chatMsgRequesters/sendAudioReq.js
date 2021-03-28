'use strict';

const method = sendAudioReq.prototype

function sendAudioReq(message, messageType, sentBy, chatRoomId, file){
    this.message = message;
    this.messageType = messageType;
    this.sentBy = sentBy;
    this.chatRoomId = chatRoomId;
    this.file = file;
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

method.getFile = function(){
    return this.file
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

method.setFile = function(file){
    this.file = file
}

module.exports = sendAudioReq;