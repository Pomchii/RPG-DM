import { Request, Response } from "express";
import { FindProficiencies } from "./FindProficiencies";

export class FindProficienciesController {
  constructor(private findProficiencies: FindProficiencies) { }

  async execute(req: Request, res: Response) {

  }
}