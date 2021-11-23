import { IUserRepository } from "../../repositories/IUserRepository";

export class ListUser{
  constructor(
    private userRepository: IUserRepository
  ){}

  async execute(username: string){
    const findUserByUsername = await this.userRepository.findByUsername(username);

    if (!findUserByUsername) {
      throw new Error("User not found!");
    }

    return findUserByUsername;
  }
}