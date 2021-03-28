'use strict';

const method = messageResponder.prototype

function messageResponder(){
    this.errors = null;
    this.messageId = null;
    this.message = null;
    this.messageType = null;
    this.sentBy = null;
    this.chatRoomId = null;
}

method.getErrors = function(){
    return this.errors
}

method.getMessageId = function(){
    return this.messageId
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

method.getMessageType = function(){
    return this.messageType
}

method.getChatRoomId = function(){
    return this.chatRoomId
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setMessageId = function(messageId){
    this.messageId = messageId
}

method.setMessage = function(message) {
    this.message = message
}

method.setMessageType = function(messageType) {
    this.messageType = messageType
}

method.setSentBy = function(sentBy) {
    this.sentBy = sentBy
}

method.setChatRoomId = function(chatRoomId) {
    this.chatRoomId = chatRoomId
}

module.exports = messageResponder;