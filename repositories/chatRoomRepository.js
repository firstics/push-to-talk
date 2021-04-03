'use strict';

const mySQLWrapper = require('../wrappers/mySQLWrapper');

module.exports = function chatRoomRepository() {
    this.getReport = function(getChatRoomReq, callback) {
        var db = new mySQLWrapper();
        db.query("SELECT cr.name, cr.seller_id, cr.buyer_id, i.record_length from chat_room cr WHERE cr.chat_room_id = "+ getChatRoomReq.getRoomId() +
        "INNER JOIN chat_message cm on cr.chat_room_id = cm.chat_room_id INNER JOIN inventory i on cm.chat_message_id = " +
        "i.message_id", function(result){          
            callback(result)
        });
    
    }

    this.createRoom = function(createRoomReq, callback) {
        var db = new mySQLWrapper();
        db.query("INSERT INTO chat_room (name, seller_id, buyer_id) VALUES ('"+ createRoomReq.getName() + "','" +
                createRoomReq.getSellerId() + "','" + createRoomReq.getBuyerId() + "')", function(result){
            callback(result)
        });
    }

    this.listAllChatRoom = function(getChatRoomReq, callback) {
        var db = new mySQLWrapper();
        db.query("SELECT * from admin WHERE admin_id = '" + getChatRoomReq.getUserId() + "'", function(result){
            if(result != ""){
                db.query("SELECT * from chat_room ", function(result){          
                    callback(result)
                });
            }
            else{
                callback("")
            }
        })
        
    
    }
}