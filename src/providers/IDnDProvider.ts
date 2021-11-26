import { IFindDndClassDTO } from "../useCases/FindDndClass/IFindDndClassDTO";
import { IItemsProficiency } from "../useCases/FindItemsProficiency/FindItemsProficiencyDTO";
import { IFindProficienciesDTO } from "../useCases/FindProficiencies/IFindProficienciesDTO";
import { IListDnDClassesDTO } from "../useCases/ListDnDClasses/ListDnDClassesDTO";
export interface IDndProvider {
  listAllClasses(route: string): Promise<IListDnDClassesDTO[]>;
  findPlayableClass(route: string): Promise<IFindDndClassDTO>;
  findProficiencies(route: string): Promise<IFindProficienciesDTO>;
  findItemsProficiencies(route: string): Promise<IItemsProficiency>;
}