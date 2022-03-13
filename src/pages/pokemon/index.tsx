import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";


type pokemon = {
    abilities: [],
    base_experience: number,
    forms: [],
    game_indices: [],
    height: number,
    held_items: any[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: any[],
    name: string,
    order: number,
    past_types: any[],
    species:{},
    sprites:{
      other:{
        dream_world:{
          front_default:string
        }
      }
    },
    stats: [],
    types: [
      {
        slot: number,
        type:{
          name:string,
          url:string
        }
      }
    ],
    weight: number
};

export const Pokemon = () =>{
    const {name} = useParams();
    const {data , isFetching} = useQuery<pokemon>(`pokemon`,async () => {
        const baseUrl: string = 'https://pokeapi.co/api/v2';
        const response = await axios.get(`${baseUrl}/pokemon/${name}`);
        return response.data;
    })
    return(
        <div>
          <h1>{data?.name}</h1>
          <img src={data?.sprites.other.dream_world.front_default} alt={data?.name}/>
        </div>
    );
}