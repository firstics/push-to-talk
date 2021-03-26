'use strict';

const method = getUserInfoReq.prototype

function getUserInfoReq(userId){
    this.userId = userId;
}

method.getUserId = function(){
    return this.userId
}


method.setUserId = function(userId){
    this.userId = userId
}

module.exports = getUserInfoReq;