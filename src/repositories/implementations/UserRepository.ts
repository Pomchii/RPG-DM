import { plainToClass } from "class-transformer";
import { getRepository, Repository, UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { IUpdateUserDTO } from "../../useCases/UpdateUser/UpdateUserDTO";

export class UserRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { username } });

    return user!;
  }

  async findById(userId: number): Promise<User> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
      where: { id: userId }
    });

    return user!;
  }

  async saveUser(user: ICreateUserDTO): Promise<void> {
    const userRepository = getRepository(User);

    await userRepository.save(plainToClass(User, {
      username: user.username,
      email: user.email,
      password: user.password
    }));
  }

  async updateUser(userId: number, userUpdate: IUpdateUserDTO): Promise<void> {
    const userRepository = getRepository(User);
    await userRepository.update({ id: userId }, userUpdate);
  }
}