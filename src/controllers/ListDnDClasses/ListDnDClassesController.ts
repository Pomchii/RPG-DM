import { Request, Response } from "express";
import { ListDnDClasses } from "./ListDnDClasses";

export class ListDndClassesController {
  constructor(
    private listDndClasses: ListDnDClasses
  ){}

  async execute(req: Request, res: Response){
    try {
      const classes = await this.listDndClasses.execute('/classes');

      let classList: any = [];
      for (let i = 0; i < classes.length; i++) {
        for (let j = 0; j < classes[i].length; j++) {
          const element = classes[i][j];
          classList.push(element.name);
        }
      }

      return res.status(200).json({classList});
    } catch (error: any) {
      return res.status(500).json({message: error.message || error || 'Unexpected Error.'});
    }
  }
}