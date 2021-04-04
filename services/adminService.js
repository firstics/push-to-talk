'use strict';
const createAdminReq = require('../models/requesters/adminRequesters/createAdminReq')
const getAdminReq = require('../models/requesters/adminRequesters/getAdminReq')

const adminResponder = require('../models/responders/adminResponders/adminResponder')
const createAdminResponder = require('../models/responders/adminResponders/createAdminResponder')

const adminRepository = require('../repositories/adminRepository')

module.exports = function adminService() {
    this.createAdmin = function(req, callback){
        let resp = new createAdminResponder();
        const requesters = new createAdminReq(req.body.username, req.body.password);
        
        const adminRepo = new adminRepository();
        adminRepo.createAdmin(requesters, function(result){
            if(result != ""){
                resp.setUsername(requesters.getUsername());
                resp.setPassword(requesters.getPassword());
            }
            callback(resp);
        })
    }

    this.getUserInfo = function(req, callback){
        let resp = new adminResponder();
        const requesters = new getAdminReq(req.body.id);
        
        const adminRepo = new adminRepository();
        adminRepo.getAdminDetail(requesters, function(result){
            if(result != ""){
                resp.setId(result[0].admin_id);
                resp.setUsername(result[0].username);
                resp.setPassword(result[0].password);
            }
            callback(resp);
        })
    }
}