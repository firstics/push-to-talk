'use strict';

module.exports = function chatRoomRepository() {
    this.getChatRoom = function(getChatRoomReq, callback) {
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