import React from 'react';
import pikachu from './pngegg.png';
import './PokemonScreen.css';
import { useQuery } from 'react-query';
import axios from 'axios';

type pokeList = {
    count: number,
    next: string,
    previous: any,
    results: [{name: string, url: string}]
}
export function PokemonScreen (){ 

    const baseUrl: string = 'https://pokeapi.co/api/v2';
    const totalPokeId: number = 150;
    let pokemonList: string= '';
    const { data, isFetching } = useQuery<pokeList>(`pokemonList`,async () => {
        const response = await axios.get(baseUrl+ `/pokemon?limit=150`);
        return response.data;
            // for(let pokeId = 1; pokeId <= totalPokeId; pokeId++){
            //     const response = await axios.get(baseUrl+ `/pokemon/${pokeId}`);
            //     let name: string = response.data.name;
            //     console.log("Cheguei aqui");
            //     let type: string = response.data.types.map((typeArray: {slot:Number, type:{name:String, url:String}}) =>{ return `<li>${typeArray.type.name}</li>`})
            //     let image: string = response.data.sprites.other.dream_world.front_default;
            //     pokemonList+= 
            //     `<div className='card'> 
            //         <h1 className='titulo'>${name}</h1>
            //         <img src=${image} alt="${name}" />
            //         <div className='poketype'> 
            //             <h2 className='properties'>Tipo</h2>
            //             <ul className='typeList'>
            //                 ${type}
            //             </ul>
            //         </div>
            //     </div>`
            //     return response.data
           
            

            
                
        })
    console.log(`data = ${data}`)

    return(
        <ul className='pokemonList'>
            { data?.results.map<JSX.Element>(result =>{ return <li className = {result.name}>{result.name}</li>})}
        </ul>
    //     //data
        
    //     // <div className='card'>
            
            
    //     //     {/* {data.results.map((pokemonConfig: { name: String, url: String}) =>{
    //     //         return <li>{pokemonConfig.name}</li>
    //     //     })} */}
    //     //     <h1 className='titulo'>Pikachu</h1>
    //     //     <img src={pikachu} alt="pikachu" />
    //     //     <p className='descricao'>
    //     //     Pokemon raro do tipo eletrico
    //     //     </p>
    //     // </div>
    );
}
