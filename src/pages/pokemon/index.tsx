import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";


type pokemon = {
    abilities: [],
    base_experience: number,
    forms: [],
    game_indices: [],
    height: number,
    
};

export const Pokemon = () =>{
    const {name} = useParams();
    const {data , isFetching} = useQuery(`pokemon`,async () => {
        const baseUrl: string = 'https://pokeapi.co/api/v2';
        const response = await axios.get(`${baseUrl}/pokemon/${name}`);
        return response.data;
    })
    return(
        <div>
            <h1>PokemonView</h1>
        </div>
    );
}