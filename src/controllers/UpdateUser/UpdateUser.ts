import { UserRepository } from "../../repositories/implementations/UserRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUser {
  constructor(private userRepository: UserRepository) { }

  async execute(data: IUpdateUserDTO, userId: number) {
    const user = await this.userRepository.findById(data.userId);

    if (!user) {
      throw new Error("User not found!");
    }

    const updatedUser = await this.userRepository.updateUser(data, userId);

    return updatedUser;
  }
}