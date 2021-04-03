'use strict';

const method = createRoomReq.prototype

function createRoomReq(name, sellerId, buyerId){
    this.name = name;
    this.sellerId = sellerId;
    this.buyerId = buyerId;
}

method.getName = function(){
    return this.name
}

method.getSellerId = function(){
    return this.sellerId
}

method.getBuyerId = function(){
    return this.buyerId
}


method.setName = function(name){
    this.name = name
}

method.setSellerId = function(sellerId){
    this.sellerId = sellerId
}

method.setBuyerId = function(buyerId){
    this.buyerId = buyerId
}

module.exports = createRoomReq;