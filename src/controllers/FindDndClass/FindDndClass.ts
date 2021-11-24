import { IDndProvider } from "../../providers/IDnDProvider";

export class FindDndClass {
  constructor(private dndProvider: IDndProvider) { }

  async execute(route: string) {
    return await this.dndProvider.findPlayableClass(route);
  }
}