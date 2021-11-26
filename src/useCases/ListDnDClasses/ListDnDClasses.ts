import { IDndProvider } from "../../providers/IDnDProvider";

export class ListDnDClasses {
  constructor(private dndProvider: IDndProvider){}

  async execute(route: string){
    return await this.dndProvider.listAllClasses(route);
  }
}