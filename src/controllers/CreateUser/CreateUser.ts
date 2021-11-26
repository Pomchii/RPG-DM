import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository"
import { ICreateUserDTO } from "./CreateUserDTO";
import { plainToClass } from "class-transformer";

export class CreateUser {
  constructor(
    private userRepository: IUserRepository

  ){}

  async execute(data: ICreateUserDTO) {
    const usernameAlreadyExists = await this.userRepository.findByUsername(data.username);
    const hashedPassword = await this.userRepository.hashUserData(data.password);
    const hashedEmail = await this.userRepository.hashUserData(data.email);

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