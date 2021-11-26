import axios, { AxiosInstance, AxiosResponse } from "axios";
import { response } from "express";
import { IFindDndClassDTO } from "../../useCases/FindDndClass/IFindDndClassDTO";
import { IItemsProficiency } from "../../useCases/FindItemsProficiency/FindItemsProficiencyDTO";
import { IListDnDClassesDTO } from "../../useCases/ListDnDClasses/ListDnDClassesDTO";
import { IDndProvider } from "../IDnDProvider";

export class DnDProvider implements IDndProvider{
  private fiveEditionApi: AxiosInstance;

  constructor(){
    this.fiveEditionApi = axios.create({
      baseURL: 'https://www.dnd5eapi.co/api',
    });
  }

  async listAllClasses(route: string): Promise<IListDnDClassesDTO[]> {
    const classes: IListDnDClassesDTO = await (await this.fiveEditionApi.get(route)).data.results;
    
    return [classes];
  }

  async findPlayableClass(route: string): Promise<IFindDndClassDTO> {
    const playableClass: IFindDndClassDTO = await (await this.fiveEditionApi.get(route)).data;

    return playableClass;
  }

  async findProficiencies(route: string) {
    const proficiencies = await (await this.fiveEditionApi.get(route)).data;

    return proficiencies;
  }

  async findItemsProficiencies(route: string): Promise<IItemsProficiency> {
    const proficiency = await (await this.fiveEditionApi.get(route)).data;

    return proficiency;
  }
}