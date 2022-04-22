import './Pokedex.css';
//react Hooks
import { useContext, useEffect} from 'react';
//contexts
import { PokemonContextProvider } from './contexts/Pokemon';
import { CurrentPokemonContextProvider } from './contexts/CurrentPokemon';
import { DescriptionRenderContextProvider } from './contexts/DescriptionRender';
import { PokedexContext } from './contexts/Pokedex';
//components
import { PokedexLeftSide } from './components/PokedexLeftSide';
import { PokedexRightSide } from './components/PokedexRightSide';


function Pokedex() {
  
  const {
    clientWidth, setClientWidth, canChangeSidePokedex, 
    buttonChangeSideRight, buttonChangeSideLeft, pokeRightSide
  } = useContext(PokedexContext)

  const handleResize = () => {
    setClientWidth(document.body.clientWidth)
  }
  
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
  },[buttonChangeSideRight, buttonChangeSideLeft, canChangeSidePokedex, pokeRightSide, clientWidth]);

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
  },[buttonChangeSideRight, buttonChangeSideLeft, canChangeSidePokedex, pokeRightSide, clientWidth]);
  
  return (
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
  );
  
}
export default Pokedex;

