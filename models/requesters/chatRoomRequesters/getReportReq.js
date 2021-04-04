'use strict';

const method = getReportReq.prototype

function getReportReq(roomId){
    this.roomId = roomId;
}

method.getRoomId = function(){
    return this.roomId
}


method.setRoomId = function(roomId){
    this.roomId = roomId
}

module.exports = getReportReq;