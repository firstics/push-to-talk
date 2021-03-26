'use strict';
const createUserReq = require('../models/requesters/userRequesters/createUserReq')
const getUserInfoReq = require('../models/requesters/userRequesters/getUserInfoReq')
const editProfileReq = require('../models/requesters/userRequesters/editProfileReq')

const userResponder = require('../models/responders/userResponders/userResponder')
const userRepository = require('../repositories/userRepository')

module.exports = function userService() {
    this.createUser = function(req, callback){
        let resp = new userResponder();
        const requesters = new createUserReq(req.body.fullName, req.body.username, req.body.password);
        console.log(req.body.fullName);
        
        const userRepo = new userRepository();
        userRepo.createUser(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }

    this.editProfile = function(req, callback){
        let resp = new userResponder();
        const requesters = new editProfileReq(req.body.fullName, req.body.username, req.body.password, req.body.ableToTalk);
        console.log(req.body.fullName);
        
        const userRepo = new userRepository();
        userRepo.editProfile(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }

    this.getUserInfo = function(req, callback){
        let resp = new userResponder();
        const requesters = new getUserInfoReq(req.body.userId);
        console.log(req.body.fullName);
        
        const userRepo = new userRepository();
        userRepo.getUserInfo(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }
}