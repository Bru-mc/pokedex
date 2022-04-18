import React, { createContext, useState } from "react";
import { pokemonPropertys } from '../../interfaces'

type PokemonsSeen ={
     [key: string]: pokemonPropertys
}
type PokemonsSeenContext = {
       pokemonSeen: PokemonsSeen,
       setPokemonSeen: React.Dispatch<React.SetStateAction<PokemonsSeen>>
};

const defaultValue:PokemonsSeenContext = {
    pokemonSeen: {teste:{name: "teste", id: 0, img: "", types: undefined, weight: "", height: "", habitat: ""}},
    setPokemonSeen: () => {}
}

export const PokemonContext = createContext(defaultValue)

export const PokemonContextProvider = ({ children }:any) =>{
    const [pokemonSeen, setPokemonSeen] = useState(defaultValue.pokemonSeen)
    return( 
        <PokemonContext.Provider value={{pokemonSeen, setPokemonSeen}}>
            {children}
        </PokemonContext.Provider>
    );
}