'use strict';

const mySQLWrapper = require('../wrappers/mySQLWrapper');
const fs = require('fs')

module.exports = function chatMsgRepository() {
    this.saveMsg = function(sendMessageReq, callback) {
        var db = new mySQLWrapper();
        let timestamp = new Date();
        db.query("INSERT INTO chat_message (message, message_type, sent_by, chat_room_id, timestamp)" + 
                "VALUES ('"+ sendMessageReq.getMessage() + "','" + sendMessageReq.getMessageType() + "','" +
                sendMessageReq.getSentBy() + "','" + sendMessageReq.getChatRoomId() + "','" + timestamp + "')", 
                function(result){
                    callback(result)
        });
    
    }

    this.saveAudioMsg = function(sendAudioMsgReq, duration, callback) {
        var db = new mySQLWrapper();
        let timestamp = new Date();
        fs.readFile(sendAudioMsgReq.getFile(), function(err, file){
            var base64File = new Buffer(file, 'binary').toString('base64');
            db.query("INSERT INTO chat_message (message, message_type, sent_by, chat_room_id, timestamp)" + 
            "VALUES ('"+ sendAudioMsgReq.getMessage() + "','" + sendAudioMsgReq.getMessageType() + "','" +
            sendAudioMsgReq.getSentBy() + "','" + sendAudioMsgReq.getChatRoomId() + "','" + timestamp + "')" +
            "RETURNING chat_message_id, INSERT INTO inventory (record_file, message_id, record_length)" +
            "VALUES ('"+ base64File + "','" + chat_message_id + "','" + duration + "')'", 
            function(result){
                callback(result)
    });
        })
    }

    this.getAllMsg = function(getAllMsgReq, callback) {
        var db = new mySQLWrapper();
        db.query("SELECT * from chat_message WHERE chat_room_id = "+ getAllMsgReq.getRoomId() + " order by timestamp", 
            function(result){    
                callback(result)
        });
    }
}