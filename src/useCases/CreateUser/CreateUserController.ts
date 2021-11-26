import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
  constructor(
    private createUser: CreateUser
  ){}

  async execute(req: Request, res: Response): Promise<Response>{
    const {username, email, password} = req.body;

    try {
      await this.createUser.execute({username, email, password});

      return res.status(201).send();
    } catch (error: any) {
      return res.status(500).json({message: error.message || error || 'Unexpected error'});
    }
  }
}