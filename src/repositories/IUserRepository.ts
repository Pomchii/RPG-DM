import { UpdateResult } from "typeorm";
import { ICreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";
import { IUpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";
import { User } from "../entities/User";

export interface IUserRepository {
  findByUsername(username: string): Promise<User>;
  findById(userId: number): Promise<User>
  saveUser(user: ICreateUserDTO): Promise<void>;
  updateUser(user: IUpdateUserDTO, userId: number): Promise<UpdateResult>;
}