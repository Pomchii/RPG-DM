import { UserRepository } from "../../repositories/implementations/UserRepository";
import { HashData } from "../../utils/implementations/HashData";
import { UpdateUser } from "./UpdateUser";
import { UpdateUserController } from "./UpdateUserController";

const userRepository = new UserRepository();
const hashData = new HashData();

const updateUser = new UpdateUser(
  userRepository,
  hashData
);

const updateUserController = new UpdateUserController(
  updateUser
);

export { updateUser, updateUserController }