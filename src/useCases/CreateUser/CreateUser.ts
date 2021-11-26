import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository"
import { ICreateUserDTO } from "./CreateUserDTO";
import { plainToClass } from "class-transformer";
import { IHashData } from "../../utils/IHashData";

export class CreateUser {
  constructor(
    private userRepository: IUserRepository,
    private hashData: IHashData
  ) { }

  async execute(data: ICreateUserDTO) {
    const usernameAlreadyExists = await this.userRepository.findByUsername(data.username);
    const hashedPassword = await this.hashData.hashUserData(data.password);
    const hashedEmail = await this.hashData.hashUserData(data.email);

    if (!usernameAlreadyExists) {
      const user = plainToClass(User, {
        username: data.username,
        email: hashedEmail,
        password: hashedPassword
      });

      await this.userRepository.saveUser(user);
    } else {
      throw new Error("username already exists.");
    }
  }
}