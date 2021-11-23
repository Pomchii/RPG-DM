"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUser = void 0;
var PostgreUserRepository_1 = require("../../repositories/implementations/PostgreUserRepository");
var CreateUser_1 = require("./CreateUser");
var CreateUserController_1 = require("./CreateUserController");
var postgreUsersRepository = new PostgreUserRepository_1.PostgreUserRepository();
var createUser = new CreateUser_1.CreateUser(postgreUsersRepository);
exports.createUser = createUser;
var createUserController = new CreateUserController_1.CreateUserController(createUser);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map