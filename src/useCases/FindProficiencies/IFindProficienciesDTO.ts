export interface IProficiencies {
  index: string;
  name: string;
  url: string;
}

export interface IFindProficienciesDTO {
  count: number;
  results: IProficiencies[];
}