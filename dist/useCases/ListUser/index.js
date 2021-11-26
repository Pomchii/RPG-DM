"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUserController = exports.listUser = void 0;
var UserRepository_1 = require("../../repositories/implementations/UserRepository");
var ListUser_1 = require("./ListUser");
var ListUserController_1 = require("./ListUserController");
var postgreUsersRepository = new UserRepository_1.UserRepository();
var listUser = new ListUser_1.ListUser(postgreUsersRepository);
exports.listUser = listUser;
var listUserController = new ListUserController_1.ListUserController(listUser);
exports.listUserController = listUserController;
//# sourceMappingURL=index.js.map