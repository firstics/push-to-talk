'use strict';

const method = getAllRoomReq.prototype

function getAllRoomReq(userId){
    this.userId = userId;
}

method.getUserId = function(){
    return this.userId
}


method.setUserId = function(userId){
    this.userId = userId
}

module.exports = getAllRoomReq;