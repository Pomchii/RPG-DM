import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUser } from "./UpdateUser";
import { UpdateUserController } from "./UpdateUserController";

const userRepository = new UserRepository();

const updateUser = new UpdateUser(userRepository);
const updateUserController = new UpdateUserController(updateUser);

export { updateUser, updateUserController }