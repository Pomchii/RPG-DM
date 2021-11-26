import { JsonWebTokenProvider } from "../../providers/implementation/JsonWebTokenProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { LoginUser } from "./LoginUser";
import { LoginUserController } from "./LoginUserController";

const userRepository = new UserRepository();
const jsonwebtoken = new JsonWebTokenProvider();

const loginUser = new LoginUser(
  userRepository,
  jsonwebtoken
);

const loginUserController = new LoginUserController(
  loginUser
);

export { loginUser, loginUserController }