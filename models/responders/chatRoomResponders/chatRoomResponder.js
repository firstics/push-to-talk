'use strict';

const method = chatRoomResponder.prototype

function chatRoomResponder(){
    this.errors = null;
    this.id = null;
    this.name = null;
    this.sellerId = null;
    this.buyerId = null;
}

method.getErrors = function(){
    return this.errors
}

method.getId = function(){
    return this.id
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

method.setId = function(id){
    this.id = id
}

method.setSellerId = function(sellerId) {
    this.sellerId = sellerId
}

method.setBuyerId = function(buyerId) {
    this.buyerId = buyerId
}

module.exports = chatRoomResponder;