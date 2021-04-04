'use strict';

module.exports = function(app) {
    const userController = require('../controllers/userController');
    const adminController = require('../controllers/adminController');
    const chatRoomController = require('../controllers/chatRoomController');
    const chatMessageController = require('../controllers/chatMessageController');


    app.route('/createUser').post(userController.createUser);
    app.route('/userInfo').get(userController.getUserInfo);
    app.route('/editProfile').patch(userController.editProfile);

    app.route('/createAdmin').post(adminController.createAdmin);
    app.route('/adminInfo').get(adminController.getAdminDetail);

    app.route('/getReport').get(chatRoomController.getReport);
    app.route('/createRoom').post(chatRoomController.createChatRoomMessage);
    app.route('/listRooms').get(chatRoomController.listAllRoom);

    app.route('/sendMessage').post(chatMessageController.sendMessage);
    app.route('/sendAudio').post(chatMessageController.sendAudioMessage);
    app.route('/getAllMsg').post(chatMessageController.getAllMessages);
}