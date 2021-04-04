'use strict';

const method = createAdminReq.prototype

function createAdminReq(username, password){
    this.username = username;
    this.password = password;
}

method.getUsername = function(){
    return this.username
}

method.getPassword = function(){
    return this.password
}

method.setUsername = function(username) {
    this.username = username
}

method.setPassword = function(password) {
    this.password = password
}

module.exports = createAdminReq;