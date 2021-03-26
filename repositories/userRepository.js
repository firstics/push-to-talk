'use strict';

module.exports = function userRepository() {
    this.createUser = function(createUserReq, callback) {
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

    this.updateProfile = function(editProfileReq, callback) {
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

    this.getUserInfo = function(getUserInfoReq, callback) {
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