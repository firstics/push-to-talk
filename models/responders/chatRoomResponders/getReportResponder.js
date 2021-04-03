'use strict';

const method = getReportResponder.prototype

function getReportResponder(){
    this.errors = null;
    this.name = null;
    this.sellerId = null;
    this.buyerId = null;
    this.recordLength = null;
}

method.getErrors = function(){
    return this.errors
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

method.getRecordLength = function(){
    return this.recordLength
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setName = function(name){
    this.name = name
}

method.setSellerId = function(sellerId) {
    this.sellerId = sellerId
}

method.setBuyerId = function(buyerId) {
    this.buyerId = buyerId
}

method.setRecordLength = function(recordLength) {
    this.recordLength = recordLength
}

module.exports = getReportResponder;