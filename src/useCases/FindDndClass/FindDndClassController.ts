import { Request, Response } from "express";
import { FindItemsProficiency } from "../FindItemsProficiency/FindItemsProficiency";
import { FindProficiencies } from "../FindProficiencies/FindProficiencies";
import { FindDndClass } from "./FindDndClass";

export class FindDndClassController {
  constructor(
    private findDndClass: FindDndClass,
    private findProficiencies: FindProficiencies,
    private findItemProficiencies: FindItemsProficiency
  ) { }

  async execute(req: Request, res: Response) {
    try {
      const playableClass = await this.findDndClass.execute(`/classes/${req.params.className}`);
      const proficiencyChoices = playableClass.proficiency_choices;
      const classProficiencies = playableClass.proficiencies;

      const classReturner = {
        name: playableClass.name,
        hitDie: playableClass.hit_die,
        proficiencyOptions: [{}],
        proficiencies: [{}]
      }

      classReturner.proficiencyOptions.pop();
      classReturner.proficiencies.pop();

      for (let i = 0; i < proficiencyChoices.length; i++) {
        const position = proficiencyChoices[i];
        const fromProficiencies = position.from;

        const proficiencies = fromProficiencies.map(proficiency => {
          const skillName = proficiency.index.split('-')
          return skillName[1];
        });

        classReturner.proficiencyOptions.push({
          choose: position.choose,
          type: position.type,
          from: proficiencies
        });
      }

      for (let i = 0; i < classProficiencies.length; i++) {
        const urlIndex = classProficiencies[i].index;

        const itemProficiency = await this.findItemProficiencies.execute(`/proficiencies/${urlIndex}`);

        classReturner.proficiencies.push({
          name: itemProficiency.name,
          type: itemProficiency.type
        });
      }

      return res.status(200).json(classReturner);
    } catch (error: any) {
      return res.status(500).json({ message: error.message || error || 'Unexpected error' });
    }
  }
}