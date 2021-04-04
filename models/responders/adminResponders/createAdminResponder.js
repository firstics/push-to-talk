'use strict';

const method = createAdminResponder.prototype

function createAdminResponder(){
    this.errors = null;
    this.username = null;
    this.password = null;
}

method.getErrors = function(){
    return this.errors
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

method.setUsername = function(username) {
    this.username = username
}

method.setPassword = function(password) {
    this.password = password
}

module.exports = createAdminResponder;