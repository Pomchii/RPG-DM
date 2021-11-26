"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUser = void 0;
var UserRepository_1 = require("../../repositories/implementations/UserRepository");
var CreateUser_1 = require("./CreateUser");
var CreateUserController_1 = require("./CreateUserController");
var postgreUsersRepository = new UserRepository_1.UserRepository();
var createUser = new CreateUser_1.CreateUser(postgreUsersRepository);
exports.createUser = createUser;
var createUserController = new CreateUserController_1.CreateUserController(createUser);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map