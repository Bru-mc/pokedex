import { DescriptionRenderContext } from '../../contexts/DescriptionRender';
import { useContext, useEffect, useState } from 'react';
import { CurrentPokemonContext } from '../../contexts/CurrentPokemon';
import './index.css';


export const DescriptionScreen = () => {
    // const [render, setRender] = useState(false);
    const {descriptionRender} = useContext(DescriptionRenderContext);
    const {currentPokemonDetails} = useContext(CurrentPokemonContext);
    const [descriptionText, setDescriptionText] = useState('');

    useEffect(()=>{
      if(currentPokemonDetails.descriptionArray.length !== 1){
        currentPokemonDetails.descriptionArray.forEach((description) =>{
          if(description.language.name==="en" 
          && description.version.name==="firered"){
            setDescriptionText(description.flavor_text)
          }
        });
      }
    },[currentPokemonDetails])
    
    return(
        descriptionRender?
        <div className="descriptionScreen">
            <h2 className='h2RightSide'>{currentPokemonDetails.currentPokemon
            .toUpperCase()}</h2>
            <p>{descriptionText}</p>
        </div>
        :
        <>
            <p></p>
        </>   
    ) 
}