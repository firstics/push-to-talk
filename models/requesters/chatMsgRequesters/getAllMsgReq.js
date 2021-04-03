'use strict';

const method = getAllMsgReq.prototype

function getAllMsgReq(chatRoomId, userId){
    this.chatRoomId = chatRoomId;
    this.userId = userId;
}

method.getChatRoomId = function(){
    return this.chatRoomId
}

method.getUserId = function(){
    return this.userId
}

method.setChatRoomId = function(chatRoomId){
    this.chatRoomId = chatRoomId
}

method.setUserId = function(userId){
    this.userId = userId
}

module.exports = getAllMsgReq;