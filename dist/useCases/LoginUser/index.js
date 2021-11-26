"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.loginUser = void 0;
var JsonWebTokenProvider_1 = require("../../providers/implementation/JsonWebTokenProvider");
var UserRepository_1 = require("../../repositories/implementations/UserRepository");
var HashData_1 = require("../../utils/implementations/HashData");
var LoginUser_1 = require("./LoginUser");
var LoginUserController_1 = require("./LoginUserController");
var userRepository = new UserRepository_1.UserRepository();
var jsonwebtoken = new JsonWebTokenProvider_1.JsonWebTokenProvider();
var hashData = new HashData_1.HashData();
var loginUser = new LoginUser_1.LoginUser(userRepository, jsonwebtoken, hashData);
exports.loginUser = loginUser;
var loginUserController = new LoginUserController_1.LoginUserController(loginUser);
exports.loginUserController = loginUserController;
//# sourceMappingURL=index.js.map