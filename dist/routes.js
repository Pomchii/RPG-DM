"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var CreateUser_1 = require("./controllers/CreateUser");
var ListDnDClasses_1 = require("./controllers/ListDnDClasses");
var ListUser_1 = require("./controllers/ListUser");
var router = express_1.Router();
exports.router = router;
//users-routes
router.post('/users/register', function (request, response) {
    return CreateUser_1.createUserController.execute(request, response);
});
router.get('/users/:userId', function (request, response) {
    return ListUser_1.listUserController.execute(request, response);
});
//classes-routes
router.get('/classes', function (request, response) {
    return ListDnDClasses_1.listDndClassesController.execute(request, response);
});
router.get('/classes/:className', function (request, response) {
});
//# sourceMappingURL=routes.js.map