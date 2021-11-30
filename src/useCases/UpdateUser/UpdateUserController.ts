import { Request, Response } from "express";
import { IReqUser } from "../../utils/IReqUser";
import { UpdateUser } from "./UpdateUser";

export class UpdateUserController {
  constructor(private updateUser: UpdateUser) { }

  async execute(req: Request, res: Response) {
    try {
      const userRequestToken: IReqUser = req.user;
      const { username, password } = req.body;

      await this.updateUser.execute(userRequestToken.userId, { username, password });

      return res.status(200).send();
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || error || 'Unexpected Error'
      });
    }
  }
}