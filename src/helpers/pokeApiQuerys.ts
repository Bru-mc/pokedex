import axios from "axios";

export const pokeApiQuerys = async (apiUrl: string ) => {
  const response = await axios.get(`${apiUrl}`);
  // console.log(response.data)
  return response.data;
}