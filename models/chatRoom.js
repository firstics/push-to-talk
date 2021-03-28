'use strict';

const method = chatRoom.prototype

function chatRoom(chatRoomId, name, sellerId, buyerId){
    this.chatRoomId = chatRoomId;
    this.name = name;
    this.sellerId = sellerId;
    this.buyerId = buyerId;
}

function getChatRoomId(){
    return this.chatRoomId
}

method.getRoomId = function(){
    return this.roomId
}


method.setRoomId = function(roomId){
    this.roomId = roomId
}

module.exports = chatRoom;