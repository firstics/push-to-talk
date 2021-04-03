'use strict';

const method = createRoomResponder.prototype

function createRoomResponder(){
    this.errors = null;
    this.name = null;
    this.sellerId = null;
    this.buyerId = null;
}

method.getErrors = function(){
    return this.errors
}

method.getSellerId = function(){
    return this.sellerId
}

method.getBuyerId = function(){
    return this.buyerId
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setSellerId = function(sellerId) {
    this.sellerId = sellerId
}

method.setBuyerId = function(buyerId) {
    this.buyerId = buyerId
}

module.exports = createRoomResponder;