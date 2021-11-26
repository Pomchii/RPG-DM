import { plainToClass } from "class-transformer";
import { getRepository, Repository, UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../../controllers/CreateUser/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import bcrypt from 'bcrypt';
import { IUpdateUserDTO } from "../../controllers/UpdateUser/UpdateUserDTO";

export class UserRepository implements IUserRepository {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getRepository(User);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });

    return user!;
  }

  async findById(userId: number): Promise<User> {
    const user = await this.userRepository.findByIds([userId]);

    return user[0];
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

  async updateUser(user: IUpdateUserDTO, userId: number): Promise<UpdateResult> {
    const updateUser = await this.userRepository.update({ id: userId }, user);

    return updateUser;
  }
}