import axios from "axios";

const fipeApi = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/",
});

export default fipeApi;