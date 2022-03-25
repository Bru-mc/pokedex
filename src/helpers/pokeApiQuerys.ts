import axios from "axios";

export const pokeApiQuerys = async (apiUrl: string ) => {
  const response = await axios.get(`${apiUrl}`);
  return response.data;
}