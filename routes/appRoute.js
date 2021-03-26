'use strict';

module.exports = function(app) {
    const userController = require('../controllers/userController');
    const adminController = require('../controllers/adminController');
    const chatRoomController = require('../controllers/chatRoomController');
    const chatMessageController = require('../controllers/chatMessageController');
    const inventoryController = require('../controllers/inventoryController');


    app.route('/createUser').post(userController.createUser);
    app.route('/userInfo').get(userController.getUserInfo);
    app.route('/editProfile').put(userController.editProfile);

    app.route('/createAdmin').post(adminController.createAdmin);
    app.route('/adminInfo').get(adminController.getAdminDetail);

    app.route('/getChatRoom').get(chatRoomController.getChatRoomMessage);

    app.route('/sendMessage').post(chatMessageController.sendMessage);
    app.route('/sendAudio').post(chatMessageController.sendAudioMessage);


    app.route('/saveRecordFile').post(inventoryController.saveRecordFile);


}