'use strict';

const method = editProfileReq.prototype

function editProfileReq(fullName, username, password, ableToTalk){
    this.fullName = fullName;
    this.username = username;
    this.password = password;
    this.ableToTalk = ableToTalk;
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

module.exports = editProfileReq;