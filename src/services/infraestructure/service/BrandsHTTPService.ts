import axios, { AxiosPromise } from "axios";

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
    return await axios.get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
  },
  getCars: async function (brandId: string): Promise<AxiosPromise> {
    console.log(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`)
    return await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`);
  }
}

export default BrandsHttpService;