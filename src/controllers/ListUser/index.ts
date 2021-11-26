import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUser } from "./ListUser";
import { ListUserController } from "./ListUserController";

const postgreUsersRepository = new UserRepository();

const listUser = new ListUser(
  postgreUsersRepository
);

const listUserController = new ListUserController(
  listUser
);

export {listUser, listUserController}