import { UserRepository } from "../../repositories/implementations/UserRepository";
import { HashData } from "../../utils/implementations/HashData";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const userRepository = new UserRepository();
const hashData = new HashData();

const createUser = new CreateUser(
  userRepository,
  hashData
);

const createUserController = new CreateUserController(
  createUser
);

export { createUser, createUserController }