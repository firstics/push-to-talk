'use strict';

const mySQLWrapper = require('../wrappers/mySQLWrapper');

module.exports = function adminRepository() {
    this.createAdmin = function(createAdminReq, callback) {
        var db = new mySQLWrapper()
        db.query("INSERT INTO admin (username, password) VALUES ('"+ createAdminReq.getUsername() + "','" +
                createAdminReq.getPassword() + "')", function(result){
                    
                callback(result)
        });
    
    }

    this.getAdminDetail = function(getAdminReq, callback) {
        var db = new mySQLWrapper()
        db.query("SELECT * from admin WHERE admin_id = "+ getAdminReq.getAdminId, function(result){     
            callback(result)
        });
    
    }
}