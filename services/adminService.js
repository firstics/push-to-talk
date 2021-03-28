'use strict';
const createAdminReq = require('../models/requesters/adminRequesters/createAdminReq')
const getAdminReq = require('../models/requesters/adminRequesters/getAdminReq')

const adminResponder = require('../models/responders/adminResponders/adminResponder')
const adminRepository = require('../repositories/adminRepository')

module.exports = function adminService() {
    this.createUser = function(req, callback){
        let resp = new adminResponder();
        const requesters = new createAdminReq(req.body.username, req.body.password);
        console.log(req.body.fullName);
        
        const adminRepo = new adminRepository();
        adminRepo.createAdmin(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }

    this.getUserInfo = function(req, callback){
        let resp = new adminResponder();
        const requesters = new getAdminReq(req.body.id);
        console.log(req.body.fullName);
        
        const adminRepo = new adminRepository();
        adminRepo.getAdminDetail(requesters, function(deals){
            resp.setDeals(deals);
            callback(resp);
        })
    }
}