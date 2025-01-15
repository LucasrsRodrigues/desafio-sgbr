import { AxiosPromise } from "axios";
import fipeApi from "../http/api";

type IResponse = {
  nome: string;
  codigo: string;
};

interface IBrandsHttpService {
  listBrands: () => Promise<AxiosPromise<IResponse[]>>;
  getCars: (brandId: string) => Promise<AxiosPromise>;
}

const BrandsHttpService: IBrandsHttpService = {
  listBrands: async function (): Promise<AxiosPromise<IResponse[]>> {
    return await fipeApi.get("/carros/marcas");
  },
  getCars: async function (brandId: string): Promise<AxiosPromise> {
    return await fipeApi.get(`carros/marcas/${brandId}/modelos`);
  }
}

export default BrandsHttpService;