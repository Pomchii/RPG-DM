import { IDndProvider } from "../../providers/IDnDProvider";

export class FindProficiencies {
  constructor(private dndProvider: IDndProvider) { }

  async execute(route: string) {
    return await this.dndProvider.findProficiencies(route);
  }
}