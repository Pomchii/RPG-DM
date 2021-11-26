"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = exports.updateUser = void 0;
var UserRepository_1 = require("../../repositories/implementations/UserRepository");
var UpdateUser_1 = require("./UpdateUser");
var UpdateUserController_1 = require("./UpdateUserController");
var userRepository = new UserRepository_1.UserRepository();
var updateUser = new UpdateUser_1.UpdateUser(userRepository);
exports.updateUser = updateUser;
var updateUserController = new UpdateUserController_1.UpdateUserController(updateUser);
exports.updateUserController = updateUserController;
//# sourceMappingURL=index.js.map