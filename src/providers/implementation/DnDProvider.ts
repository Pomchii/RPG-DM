import axios, { AxiosInstance, AxiosResponse } from "axios";
import { response } from "express";
import { IListDnDClassesDTO } from "../../controllers/ListDnDClasses/ListDnDClassesDTO";
import { IDndProvider } from "../IDnDProvider";

export class DnDProvider implements IDndProvider{
  private fiveEditionApi: AxiosInstance;

  constructor(){
    this.fiveEditionApi = axios.create({
      baseURL: 'https://www.dnd5eapi.co/api',
    });
  }

  async listAllClasses(route: string) {
    const classes: IListDnDClassesDTO = await (await this.fiveEditionApi.get(route)).data.results;
    
    return [classes];
  }

  async findClass(){}
}