'use strict';
const createUserReq = require('../models/requesters/userRequesters/createUserReq')
const getUserInfoReq = require('../models/requesters/userRequesters/getUserInfoReq')
const editProfileReq = require('../models/requesters/userRequesters/editProfileReq')

const createUserResponder = require('../models/responders/userResponders/createUserResponder')
const userResponder = require('../models/responders/userResponders/userResponder')
const userRepository = require('../repositories/userRepository')

module.exports = function userService() {
    this.createUser = function(req, callback){
        let resp = new createUserResponder();
        const requesters = new createUserReq(req.body.fullName, req.body.username, req.body.password);
        console.log(req.body.fullName);
        
        const userRepo = new userRepository();
        userRepo.createUser(requesters.getFullName(), requesters.getUsername(), requesters.getPassword(), function(result){
            if(result != ""){
                resp.setFullName(requesters.getFullName());
                resp.setUsername(requesters.getUsername());
                resp.setPassword(requesters.getPassword());
            }
            callback(resp);
        })
    }

    this.editProfile = function(req, callback){
        let resp = new userResponder();
        const requesters = new editProfileReq(req.body.userId, req.body.fullName, req.body.username, req.body.password, req.body.ableToTalk);
        console.log(req.body.fullName);
        
        const userRepo = new userRepository();
        userRepo.updateProfile(requesters.getUserId(), requesters.getUsername(), requesters.getPassword(), requesters.getAbleToTalk(), function(result){
            if(result != ""){
                resp.setId(requesters.getUserId());
                resp.setFullName(requesters.getFullName());
                resp.setUsername(requesters.getUsername());
                resp.setPassword(requesters.getPassword());
                resp.setAbleToTalk(requesters.getAbleToTalk());   
            }
            callback(resp);
        })
    }

    this.getUserInfo = function(req, callback){
        let resp = new userResponder();
        const requesters = new getUserInfoReq(req.body.userId);
        console.log(req.body.fullName);
        
        const userRepo = new userRepository();
        userRepo.getUserInfo(requesters.getUserId(), function(result){
            if(result != ""){
                resp.setId(result[0].user_id);
                resp.setFullName(result[0].full_name);
                resp.setUsername(result[0].username);
                resp.setPassword(result[0].password);
                resp.setAbleToTalk(result[0].able_to_talk);  
            }  
            callback(resp);
        })
    }
}