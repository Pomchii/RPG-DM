import { IFindProficienciesDTO, IProficiencies } from "../FindProficiencies/IFindProficienciesDTO";

interface ProficiencyChoices {
  choose: number;
  type: string;
  from: IProficiencies[];
}

export interface IFindDndClassDTO {
  name: string;
  hit_die: number;
  proficiency_choices: ProficiencyChoices[]; // CREATE OWN DTO
  proficiencies: IProficiencies[]; // CREATE OWN DTO
  savingThrows: object[]; // CREATE OWN DTO
  startingEquipment: object[]; //CREATE OWN DTO 
  classLevels: string; //CREATE OWN DTO 
  multiClassing: object; //CREATE OWN DTO 
  subclass: object[]; //CREATE OWN DTO 
  spellCasting: object; //CREATE OWN DTO 
  spells: string; //CREATE OWN DTO 
  url: string;
}

