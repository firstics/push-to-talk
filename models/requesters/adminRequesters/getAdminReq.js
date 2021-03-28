'use strict';

const method = getAdminReq.prototype

function getAdminReq(adminId){
    this.adminId = adminId;
}

method.getAdminId = function(){
    return this.adminId
}


method.setAdminId = function(adminId){
    this.adminId = adminId
}

module.exports = getAdminReq;