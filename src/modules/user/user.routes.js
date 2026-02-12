const { Router } = require('express');
const userController = require('./user.controller');
const Authorization = require('../../common/guard/authorization.guard');
const router = Router();

router.get("/whoAmi", Authorization, userController.whoAmi);

module.exports = {
    UserRouter: router
}