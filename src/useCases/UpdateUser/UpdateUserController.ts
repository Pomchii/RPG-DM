import { Request, Response } from "express";
import { UpdateUser } from "./UpdateUser";

export class UpdateUserController {
  constructor(
    private updateUser: UpdateUser
  ) { }

  async execute(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      console.log(userId);

      const user = await this.updateUser.execute(req.body, userId);

      console.log(user);

      return res.status(200).json({});
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}