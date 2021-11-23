import { PostgreUserRepository } from "../../repositories/implementations/PostgreUserRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const postgreUsersRepository = new PostgreUserRepository();

const createUser = new CreateUser(
  postgreUsersRepository
);

const createUserController = new CreateUserController(
  createUser
);

export {createUser, createUserController}