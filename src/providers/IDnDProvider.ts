import { IFindDndClassDTO } from "../controllers/FindDndClass/IFindDndClassDTO";
import { IFindProficienciesDTO } from "../controllers/FindProficiencies/IFindProficienciesDTO";
import { IListDnDClassesDTO } from "../controllers/ListDnDClasses/ListDnDClassesDTO";
export interface IDndProvider {
  listAllClasses(route: string): Promise<IListDnDClassesDTO[]>;
  findPlayableClass(route: string): Promise<IFindDndClassDTO>;
  findProficiencies(route: string): Promise<IFindProficienciesDTO>;
}