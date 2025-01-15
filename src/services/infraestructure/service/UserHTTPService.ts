import axios, { AxiosResponse } from "axios";

type ILoginDTO = {
  user: string;
  password: string;
};

interface IUserHTTPService {
  login: (data: ILoginDTO) => Promise<AxiosResponse>;
}

const UserHTTPService: IUserHTTPService = {
  login: async function (data: ILoginDTO): Promise<AxiosResponse> {
    console.log("===> UserHTTPService");
    console.log(data)
    console.log("===> UserHTTPService");

    return await axios.post("https://test-api-y04b.onrender.com/signIn", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
};

export default UserHTTPService;
