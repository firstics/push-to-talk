'use strict';

const method = userResponder.prototype

function userResponder(){
    this.errors = null;
    this.id = null;
    this.fullName = null;
    this.username = null;
    this.password = null;
    this.ableToTalk = false;
}

method.getErrors = function(){
    return this.errors
}

method.getId = function(){
    return this.id
}

method.getFullName = function(){
    return this.fullName
}

method.getUsername = function(){
    return this.username
}

method.getPassword = function(){
    return this.password
}

method.getAbleToTalk = function(){
    return this.ableToTalk
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setId = function(id){
    this.id = id
}

method.setFullName = function(fullName){
    this.fullName = fullName
}

method.setUsername = function(username) {
    this.username = username
}

method.setPassword = function(password) {
    this.password = password
}

method.setAbleToTalk = function(ableToTalk) {
    this.ableToTalk = ableToTalk
}




module.exports = userResponder;