import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { ICreateUserDTO } from "../../controllers/CreateUser/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import bcrypt from 'bcrypt';

export class UserRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { username } });

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

  async hashUserData(userData: string): Promise<string> {
    const hashedPassword = bcrypt.hash(userData, 10);

    return hashedPassword;
  }

  async compareHashedUserData(incomingData: string, userData: string): Promise<boolean> {
    const comparedDataValues = await bcrypt.compare(incomingData, userData);

    return comparedDataValues;
  }
}