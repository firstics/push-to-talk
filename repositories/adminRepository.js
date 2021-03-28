'use strict';

module.exports = function adminRepository() {
    this.createAdmin = function(createAdminReq, callback) {
        var db = require('../wrappers/mySQLWrapper');
        db.query("SELECT deal_type_name from master.eth_deal_type WHERE deal_type_id = "+ dealType + " order by display_order", 
                function(err, result, fields){
                    
            if(result == undefined){
                callback([])
            }
            else{
                callback(result)
            }
        });
    
    }

    this.getAdminDetail = function(editProfileReq, callback) {
        var db = require('../wrappers/mySQLWrapper');
        db.query("SELECT deal_type_name from master.eth_deal_type WHERE deal_type_id = "+ dealType + " order by display_order", 
                function(err, result, fields){
                    
            if(result == undefined){
                callback([])
            }
            else{
                callback(result)
            }
        });
    
    }
}