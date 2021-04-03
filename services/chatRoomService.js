'use strict';
const getChatRoomReq = require('../models/requesters/chatRoomRequesters/getChatRoomReq')
const createRoomReq = require('../models/requesters/chatRoomRequesters/createRoomReq')
const getAllRoomReq = require('../models/requesters/chatRoomRequesters/getAllRoomReq')
const getReportReq = require('../models/requesters/chatRoomRequesters/getReportReq')

const chatRoomResponder = require('../models/responders/chatRoomResponders/chatRoomResponder')
const createRoomResponder = require('../models/responders/chatRoomResponders/createRoomResponder')
const getAllRoomResponder = require('../models/responders/chatRoomResponders/getAllRoomResponder')
const getReportResponder = require('../models/responders/chatRoomResponders/getReportResponder')

const chatRoomRepository = require('../repositories/chatRoomRepository')
const adminRepository = require('../repositories/adminRepository')

module.exports = function chatRoomService() {
    this.getReport = function(req, callback){
        let resp = new getReportResponder();
        const requesters = new getReportReq(req.body.roomId);
        
        const chatRoomRepo = new chatRoomRepository();
        const adminRepo = new adminRepository();
        adminRepo.getAdminDetail(requesters, function(result){
            if(result != ""){
                chatRoomRepo.getReport(requesters, function(result){
                    if(result != ""){
                        resp.setSellerId(result[0].seller_id)
                        resp.setBuyerId(result[0].buyer_id)
                        resp.setName(result[0].name)
                        resp.setRecordLength(result[0].record_length)
                    }
                })
            }
            else{
                resp.setErrors("Not have a permission for this request");
            }
            callback(resp);
        })
    }

    this.createRoom = function(req, callback){
        let resp = new createRoomResponder();
        const requesters = new createRoomReq(req.body.name, req.body.sellerId, req.body.buyerId);
        
        const chatRoomRepo = new chatRoomRepository();
        chatRoomRepo.createRoom(requesters, function(result){
            if(result != undefined){
                resp.setName(requesters.getName());
                resp.setSellerId(requesters.getSellerId());
                resp.setBuyerId(requesters.getBuyerId());
            }
            callback(resp);
        })
    }

    this.listAllRoom = function(req, callback){
        let resp = new getAllRoomResponder();
        const requesters = new getAllRoomReq(req.body.userId);
        
        const chatRoomRepo = new chatRoomRepository();
        const adminRepo = new adminRepository();
        adminRepo.getAdminDetail(requesters, function(result){
            if(result != ""){
                chatRoomRepo.createRoom(requesters, function(result){
                    if(result != ""){
                        resp.setRooms(JSON.stringify(result));
                    }
                })
            }
            else{
                resp.setErrors("Not have a permission for this request");
            }
            callback(resp);
        })
        
    }

    this.listAllRoom = function(req, callback){
        let resp = new getAllRoomResponder();
        const requesters = new getAllRoomReq(req.body.userId);
        
        const chatRoomRepo = new chatRoomRepository();
        const adminRepo = new adminRepository();
        adminRepo.getAdminDetail(requesters, function(result){
            if(result != ""){
                chatRoomRepo.createRoom(requesters, function(result){
                    if(result != ""){
                        resp.setRooms(JSON.stringify(result));
                    }
                })
            }
            else{
                resp.setErrors("Not have a permission for this request");
            }
            callback(resp);
        })
        
    }

    this.getReport = function(req, callback){
        let resp = new getReportResponder();
        const requesters = new getReportReq(req.body.roomId);
        
        const chatRoomRepo = new chatRoomRepository();
        const adminRepo = new adminRepository();
        adminRepo.getAdminDetail(requesters, function(result){
            if(result != ""){
                chatRoomRepo.createRoom(requesters, function(result){
                    if(result != ""){
                        resp.setRooms(JSON.stringify(result));
                    }
                })
            }
            else{
                resp.setErrors("Not have a permission for this request");
            }
            callback(resp);
        })
        
    }
}