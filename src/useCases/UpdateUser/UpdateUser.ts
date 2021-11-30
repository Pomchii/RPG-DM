import { IUserRepository } from "../../repositories/IUserRepository";
import { IHashData } from "../../utils/IHashData";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUser {
  constructor(
    private userRepository: IUserRepository,
    private hashData: IHashData
  ) { }

  async execute(userId: number, updateUser: IUpdateUserDTO) {
    const hashedPassword = await this.hashData.hashUserData(updateUser.password);

    await this.userRepository.updateUser(userId, {
      username: updateUser.username,
      password: hashedPassword
    });
  }
}