import { IJsonWebTokenProvider } from "../../providers/IJsonWebTokenProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ILoginUser } from "./LoginUserDTO";


export class LoginUser {
  constructor(
    private userRepository: IUserRepository,
    private jsonWebtoken: IJsonWebTokenProvider
  ) { }

  async execute(data: ILoginUser) {
    const user = await this.userRepository.findByUsername(data.username);

    if (!user) {
      throw new Error("Username is incorrect or does not exist.");
    }

    const comparePassword = await this.userRepository.compareHashedUserData(data.password, user.password);

    if (comparePassword) {
      return await this.jsonWebtoken.signToken(user.id);
    } else {
      throw new Error("Incorrect Password.");
    }
  }
}