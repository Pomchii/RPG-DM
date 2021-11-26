import { JsonWebTokenProvider } from "../../providers/implementation/JsonWebTokenProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { HashData } from "../../utils/implementations/HashData";
import { LoginUser } from "./LoginUser";
import { LoginUserController } from "./LoginUserController";

const userRepository = new UserRepository();
const jsonwebtoken = new JsonWebTokenProvider();
const hashData = new HashData();

const loginUser = new LoginUser(
  userRepository,
  jsonwebtoken,
  hashData
);

const loginUserController = new LoginUserController(
  loginUser
);

export { loginUser, loginUserController }