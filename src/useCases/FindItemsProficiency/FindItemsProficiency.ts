import { DnDProvider } from "../../providers/implementation/DnDProvider";

export class FindItemsProficiency {
  constructor(private dndProvider: DnDProvider) { }

  async execute(route: string) {
    return await this.dndProvider.findItemsProficiencies(route);
  }
}