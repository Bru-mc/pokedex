import { createContext, useState } from "react";

type currentPokemonDetailsType = {
    currentPokemon: string,
    descriptionArray: [
        {
            flavor_text:string,
            language:{
                name:string
            },
            version:{
                name:string
            }
        }]
}
type defaultValuetype = {
    currentPokemonDetails: currentPokemonDetailsType,
    setCurrentPokemonDetails: React.Dispatch<React.SetStateAction<currentPokemonDetailsType>>
}

const defaultValue: defaultValuetype = {
    currentPokemonDetails: {
        currentPokemon: 'Teste',
        descriptionArray: [
            {
                flavor_text:'',
                language:{
                    name:''
                },
                version:{
                    name:''
                }
            }
        ]
    },
    setCurrentPokemonDetails: () =>{}
}

export const CurrentPokemonContext = createContext(defaultValue);
export const CurrentPokemonContextProvider = ({ children }:any) => {
    const [currentPokemonDetails, setCurrentPokemonDetails] = useState(defaultValue.currentPokemonDetails)
    return(
        <CurrentPokemonContext.Provider value={{currentPokemonDetails, setCurrentPokemonDetails}} >
            {children}
        </CurrentPokemonContext.Provider>
    );
}