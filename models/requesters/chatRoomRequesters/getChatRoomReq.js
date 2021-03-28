'use strict';

const method = getChatRoomReq.prototype

function getChatRoomReq(roomId){
    this.roomId = roomId;
}

method.getRoomId = function(){
    return this.roomId
}


method.setRoomId = function(roomId){
    this.roomId = roomId
}

module.exports = getChatRoomReq;