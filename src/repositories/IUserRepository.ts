import { UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../controllers/CreateUser/CreateUserDTO";
import { IUpdateUserDTO } from "../controllers/UpdateUser/UpdateUserDTO";
import { User } from "../entities/User";

export interface IUserRepository {
  findByUsername(username: string): Promise<User>;
  findById(userId: number): Promise<User>
  saveUser(user: ICreateUserDTO): Promise<void>;
  hashUserData(userData: string): Promise<string>;
  compareHashedUserData(incomingData: string, userData: string): Promise<boolean>;
  updateUser(user: IUpdateUserDTO, userId: number): Promise<UpdateResult>;
}