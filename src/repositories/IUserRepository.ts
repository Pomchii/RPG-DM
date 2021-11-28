import { UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";
import { User } from "../entities/User";

export interface IUserRepository {
  findByUsername(username: string): Promise<User>;
  findById(userId: number): Promise<User>
  saveUser(user: ICreateUserDTO): Promise<void>;
}