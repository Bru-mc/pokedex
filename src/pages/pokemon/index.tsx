import axios from "axios";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import './index.css'
import back from "../../assets/back.png";


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
    <div className="pokeCard" key={data?.name}>
      <div className="pokeCardTop">
        <div className="pokeCardHeader">
          <Link to={`/pokemons`}>
            <img className="back" src={back} alt="Back"/>
          </Link>
          <h1 className="pokeCardTitle">{data?.name.toLocaleUpperCase()}</h1>
        </div>
        <img className="pokeImg" src={data?.sprites.other.dream_world.front_default} alt={data?.name}/>
      </div>
      <div className="pokeCardType">
        <h2 className="pokeCardH2">TYPE:</h2>
        <div className="typeOp">
          {data?.types.map<JSX.Element>(types =>{
          return <p key={types.type.name}>{types.type.name.toUpperCase()}</p>
          })}
        </div>
      </div>
    </div>
  );
}