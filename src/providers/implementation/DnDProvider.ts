import axios, { AxiosInstance, AxiosResponse } from "axios";
import { response } from "express";
import { IFindDndClassDTO } from "../../controllers/FindDndClass/IFindDndClassDTO";
import { IListDnDClassesDTO } from "../../controllers/ListDnDClasses/ListDnDClassesDTO";
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
    const proficiency = await (await this.fiveEditionApi.get(route)).data;

    return proficiency;
  }
}