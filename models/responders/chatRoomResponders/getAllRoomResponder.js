'use strict';

const method = getAllRoomResponder.prototype

function getAllRoomResponder(){
    this.errors = null;
    this.rooms = null;
}

method.getErrors = function(){
    return this.errors
}

method.getRooms = function(){
    return this.rooms
}

method.setErrors = function(errors){
    this.errors = errors
}

method.setRooms = function(rooms){
    this.rooms = rooms
}

module.exports = getAllRoomResponder;