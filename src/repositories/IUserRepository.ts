import { UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";
import { User } from "../entities/User";
import { IUpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";

export interface IUserRepository {
  findByUsername(username: string): Promise<User>;
  findById(userId: number): Promise<User>
  saveUser(user: ICreateUserDTO): Promise<void>;
  updateUser(userId: number, userUpdate: IUpdateUserDTO): Promise<void>;
}