import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const postgreUsersRepository = new UserRepository();

const createUser = new CreateUser(
  postgreUsersRepository
);

const createUserController = new CreateUserController(
  createUser
);

export {createUser, createUserController}