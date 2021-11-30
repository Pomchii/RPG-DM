import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function checkAuth(request: Request, response: Response, next: NextFunction) {
  try {
    const jsonToken: string = request.headers.authorization as string
    const decoded = jsonToken.split(" ")[1];

    const user = jwt.verify(decoded, "#l^UgAvRh5w9yf^JSw!&tcMNx!gMNm%Y0Hrmcy62O4x08MS2cx");
    request.user = user! as string;
    next();
  } catch (error: any) {
    return response.status(401).send();
  }
}