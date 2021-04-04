'use strict';

const mySQLWrapper = require('../wrappers/mySQLWrapper');

module.exports = function userRepository() {
    this.createUser = function(fullname, username, password, callback) {
        var db = new mySQLWrapper()
        db.query("INSERT INTO user (full_name, username, password, able_to_talk) VALUES ('"+ fullname + "','" +
                username + "','" + password + "','" + 0 +"')", function(result){
                    console.log("Result = " + result);
                    callback(result)
                })
    
    }

    this.updateProfile = function(userId, fullname, username, password, ableToTalk, callback) {
        var db = new mySQLWrapper()
        let talk = 0
        if(ableToTalk) talk = 1
        else 0
        db.query("UPDATE user SET full_name = '" + fullname + "', " + "username = '" + username + "', " + 
                "password = '" + password + "', " + "able_to_talk = '" + talk + "' WHERE user_id = '" + userId + "'",
                function(result){
                    
                    
                    callback(result)
                })
    
    }

    this.getUserInfo = function(userId, callback) {
        var db = new mySQLWrapper()
        db.query("SELECT * from user WHERE user_id = '"+ userId + "'", function(result){
            console.log("result = " + result);
            
            callback(result)           
        });
    }
}