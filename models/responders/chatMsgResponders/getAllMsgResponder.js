'use strict';

const method = getAllMsgResponder.prototype

function getAllMsgResponder(){
    this.errors = null;
    this.messages = null;
}

method.getErrors = function(){
    return this.errors
}

method.getMessages = function(){
    return this.messages
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setMessages = function(messages) {
    this.messages = messages
}

module.exports = getAllMsgResponder;