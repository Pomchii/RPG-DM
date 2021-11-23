import { IListDnDClassesDTO } from "../controllers/ListDnDClasses/ListDnDClassesDTO";

export interface IDndProvider {
  listAllClasses(route: string): Promise<IListDnDClassesDTO[]>;
  findClass(route: string): Promise<any>;
}