import { useContext, useEffect, useState } from 'react';
import { CurrentPokemonContext } from '../../contexts/CurrentPokemon';
import './index.css';

export const DescriptionScreen = () => {
    const [render, setRender] = useState(false);
    
    const {currentPokemonDetails} = useContext(CurrentPokemonContext);
    
    useEffect(()=>{
        if(currentPokemonDetails.currentPokemon != "Teste"){
            setRender(true);
        }
    },[currentPokemonDetails.currentPokemon])
    
    return(
        render?
        <div className="descriptionScreen">
            <h2 className='h2RightSide'>{currentPokemonDetails.currentPokemon}</h2>
        </div>
        :
        <>
            <p></p>
        </>   
    ) 
}