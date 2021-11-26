import { IListDnDClassesDTO } from "../ListDnDClasses/ListDnDClassesDTO";

export interface IItemsProficiency {
  index: string;
  type: string;
  name: string;
  classes: IListDnDClassesDTO[]
}
