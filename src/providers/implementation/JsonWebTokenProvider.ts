import { IJsonWebTokenProvider } from "../IJsonWebTokenProvider";
import jwt from "jsonwebtoken";

export class JsonWebTokenProvider implements IJsonWebTokenProvider {
  async signToken(userId: number): Promise<string> {
    const token = jwt.sign(
      { userId },
      "#l^UgAvRh5w9yf^JSw!&tcMNx!gMNm%Y0Hrmcy62O4x08MS2cx",
      { expiresIn: "4h" }
    );

    return token;
  }
}