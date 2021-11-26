import { ICreateUserDTO } from "../controllers/CreateUser/CreateUserDTO";
import { User } from "../entities/User";

export interface IUserRepository {
  findByUsername(username: string): Promise<User>;
  saveUser(user: ICreateUserDTO): Promise<void>;
  hashUserData(userData: string): Promise<string>;
  compareHashedUserData(incomingData: string, userData: string): Promise<boolean>;
}