import { Request, Response } from "express";
import { LoginUser } from "./LoginUser";

export class LoginUserController {
  constructor(
    private loginUser: LoginUser
  ) { }

  async execute(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      const loggedUser = await this.loginUser.execute({
        username,
        password
      });

      return res.status(200).json({
        token: loggedUser
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || error || "Unexpected error"
      });
    }
  }
}