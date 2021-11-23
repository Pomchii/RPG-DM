import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository"
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUser {
  constructor(
    private userRepository: IUserRepository
  ){}

  async execute(data: ICreateUserDTO) {
    const usernameAlreadyExists = await this.userRepository.findByUsername(data.username);

    if (usernameAlreadyExists) {
      throw new Error("username already exists.");
    }

    await this.userRepository.saveUser(data);
  }
}