import { IJsonWebTokenProvider } from "../../providers/IJsonWebTokenProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IHashData } from "../../utils/IHashData";
import { ILoginUser } from "./LoginUserDTO";


export class LoginUser {
  constructor(
    private userRepository: IUserRepository,
    private jsonWebtoken: IJsonWebTokenProvider,
    private hashData: IHashData
  ) { }

  async execute(data: ILoginUser) {
    const user = await this.userRepository.findByUsername(data.username);

    if (!user) {
      throw new Error("Username is incorrect or does not exist.");
    }

    const comparePassword = await this.hashData.compareHashedUserData(data.password, user.password);

    if (comparePassword) {
      return await this.jsonWebtoken.signToken(user.id);
    } else {
      throw new Error("Incorrect Password.");
    }
  }
}