import axios from "axios";
import { ApiElement } from "Interfaces/ApiElement";

const apiUrl: string = process.env.REACT_APP_APIURL as string;
const apiKey: string = process.env.REACT_APP_APIKEY as string;

const getTransfersFromApi = async (): Promise<ApiElement[]> => {
  const request = await axios.get(apiUrl, {
    headers: {
      "x-rapidapi-key": apiKey,
    },
  });
  return request.data.response;
};

export { getTransfersFromApi };
