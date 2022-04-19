import './Pokedex.css';
//react-router-dom
// import { HashRouter, Route, Routes} from 'react-router-dom';
//react Hooks
import { useContext, useEffect, useRef, useState } from 'react';
//contexts
import { PokemonContextProvider } from './contexts/Pokemon';
import { CurrentPokemonContextProvider } from './contexts/CurrentPokemon';
// import { LedAnimationContext, LedAnimationProvider } from './contexts/LedAnimation';
// //pages components

// import { PokemonsList } from './pages/PokemonsList';
// import { PokemonCard } from './pages/PokemonCard';
// import arrowRight from './assets/caret-right-solid.png'
// import { disableElement } from './helpers/disableElement';
// import { enableElement } from './helpers/enableElement';
// import { changeSidePokedex } from './helpers/changeSidePokedex';
// import { DescriptionScreen } from './components/DescriptionScreen';
// import { PokeHome } from './pages/PokeHome';
import { DescriptionRenderContextProvider } from './contexts/DescriptionRender';
import { PokedexContext, PokedexContextProvider } from './contexts/Pokedex';
import { PokedexLeftSide } from './components/PokedexLeftSide';
import { PokedexRightSide } from './components/PokedexRightSide';


function Pokedex() {
  
  const {
    clientWidth, setClientWidth, canChangeSidePokedex, 
    buttonChangeSideRight, buttonChangeSideLeft, pokeRightSide
  } = useContext(PokedexContext)

  const handleResize = () => setClientWidth(document.body.clientWidth)
  
  useEffect(() => {  
    window.addEventListener('resize', handleResize);
  });
  
  useEffect(() => {
    if(buttonChangeSideRight && buttonChangeSideLeft && pokeRightSide){
      if (clientWidth < 660 && canChangeSidePokedex){
        buttonChangeSideRight!.current.style.visibility = "initial";
        buttonChangeSideLeft!.current.style.visibility = "initial";
        pokeRightSide!.current.style.left = "initial";
      }
    }
  },[canChangeSidePokedex]);

  useEffect(() => { 
    if(buttonChangeSideRight && buttonChangeSideLeft && pokeRightSide){
      if(clientWidth >= 660){
        buttonChangeSideRight!.current.style.visibility = "hidden";
        buttonChangeSideLeft!.current.style.visibility = "hidden";
        pokeRightSide!.current.style.left = "-32px";
        document.body.style.top = "0";
        document.body.style.bottom = "initial";
      }
      if (document.body.clientWidth < 660 && canChangeSidePokedex){
        buttonChangeSideRight!.current.style.visibility = "initial";
        buttonChangeSideLeft!.current.style.visibility = "initial";
        pokeRightSide!.current.style.left = "initial";
      }
    }
  },[clientWidth]);
  
  return (
    <PokedexContextProvider>
    <PokemonContextProvider>
    <DescriptionRenderContextProvider>
    <CurrentPokemonContextProvider>
    <div className='pokedexContainer'>
      <PokedexLeftSide/>
      <PokedexRightSide/>  
    </div>
    </CurrentPokemonContextProvider> 
    </DescriptionRenderContextProvider>
    </PokemonContextProvider>
    </PokedexContextProvider>
  );
  
}
export default Pokedex;

