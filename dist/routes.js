"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var CreateUser_1 = require("./controllers/CreateUser");
var FindDndClass_1 = require("./controllers/FindDndClass");
var ListDnDClasses_1 = require("./controllers/ListDnDClasses");
var ListUser_1 = require("./controllers/ListUser");
var LoginUser_1 = require("./controllers/LoginUser");
var UpdateUser_1 = require("./controllers/UpdateUser");
var checkAuth_1 = require("./middlewares/checkAuth");
var router = express_1.Router();
exports.router = router;
//users-routes
router.post('/users/register', function (request, response) {
    return CreateUser_1.createUserController.execute(request, response);
});
router.post('/login', function (request, response) {
    return LoginUser_1.loginUserController.execute(request, response);
});
router.put('/users/:userId', checkAuth_1.checkAuth, function (request, response) {
    return UpdateUser_1.updateUserController.execute(request, response);
});
router.get('/users/:userId', function (request, response) {
    return ListUser_1.listUserController.execute(request, response);
});
//classes-routes
router.get('/classes', function (request, response) {
    return ListDnDClasses_1.listDndClassesController.execute(request, response);
});
router.get('/classes/:className', function (request, response) {
    return FindDndClass_1.findDndClassController.execute(request, response);
});
//# sourceMappingURL=routes.js.map