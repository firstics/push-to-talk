'use strict';

module.exports = function chatMsgRepository() {
    this.saveMsg = function(sendMessageReq, callback) {
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

    this.saveAudioMsg = function(sendAudioMsgReq, callback) {
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