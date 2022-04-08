import { useContext, useEffect, useState } from 'react';
import { CurrentPokemonContext } from '../../contexts/CurrentPokemon';
import './index.css';

export const DescriptionScreen = () => {
    
    const {currentPokemonDetails} = useContext(CurrentPokemonContext);
    
    
    return(
        <div className="descriptionScreen">
            <h2 className='h2RightSide'>{currentPokemonDetails.currentPokemon.toUpperCase()}</h2>
        </div>   
    ) 
}