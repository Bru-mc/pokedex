import React from 'react';
import pikachu from './pngegg.png';
import './PokemonScreen.css';
import { useQuery } from 'react-query';
import axios from 'axios';

export function PokemonScreen (){ 

    const { data, isFetching } = useQuery<any>(`pokemonList`,async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        
        return response.data;
    })
    console.log(data)
    return(
        
        <div className='card'>
            
            
            {data.results.map((pokemonConfig: { name: String, url: String}) =>{
                return <li>{pokemonConfig.name}</li>
            })}
            <h1 className='titulo'>Pikachu</h1>
            <img src={pikachu} alt="pikachu" />
            <p className='descricao'>
            Pokemon raro do tipo eletrico
            </p>
        </div>
    );
}
