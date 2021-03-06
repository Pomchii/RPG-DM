import { Request, Response } from "express";
import { ListUser } from "./ListUser";

export class ListUserController {
  constructor(
    private listUser: ListUser
  ){}

  async execute(req: Request, res: Response){
    const userId = req.params.userId;
    
    try {
      const user = await this.listUser.execute(userId);

      const dataBuilded: {} = {
        username: user.username,
        email: user.email
      }

      return res.status(200).json(dataBuilded);
    } catch (error: any) {
      return res.status(404).json({
        message: error.message || error || 'Unexpected error.'
      });
    }
  }
}