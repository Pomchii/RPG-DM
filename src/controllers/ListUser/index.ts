import { PostgreUserRepository } from "../../repositories/implementations/PostgreUserRepository";
import { ListUser } from "./ListUser";
import { ListUserController } from "./ListUserController";

const postgreUsersRepository = new PostgreUserRepository();

const listUser = new ListUser(
  postgreUsersRepository
);

const listUserController = new ListUserController(
  listUser
);

export {listUser, listUserController}