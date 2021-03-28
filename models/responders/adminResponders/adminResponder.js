'use strict';

const method = adminResponder.prototype

function adminResponder(){
    this.errors = null;
    this.id = null;
    this.username = null;
    this.password = null;
}

method.getErrors = function(){
    return this.errors
}

method.getId = function(){
    return this.id
}

method.getUsername = function(){
    return this.username
}

method.getPassword = function(){
    return this.password
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setId = function(id){
    this.id = id
}

method.setUsername = function(username) {
    this.username = username
}

method.setPassword = function(password) {
    this.password = password
}

module.exports = adminResponder;