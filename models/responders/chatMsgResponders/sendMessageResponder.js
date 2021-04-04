'use strict';

const method = sendMessageResponder.prototype

function sendMessageResponder(){
    this.errors = null;
    this.messageSent = false;
}

method.getErrors = function(){
    return this.errors
}

method.getMessageSent = function(){
    return this.messageSent
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setMessageSent = function(messageSent) {
    this.messageSent = messageSent
}

module.exports = sendMessageResponder;