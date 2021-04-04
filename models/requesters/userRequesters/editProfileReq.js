'use strict';

const method = editProfileReq.prototype

function editProfileReq(userId, fullName, username, password, ableToTalk){
    this.userId = userId;
    this.fullName = fullName;
    this.username = username;
    this.password = password;
    this.ableToTalk = ableToTalk;
}

method.getUserId = function(){
    return this.userId
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

method.setUserId =  function(fullName){
    this.fullName = fullName
}

method.setFullName = function(userId){
    this.userId = userId
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