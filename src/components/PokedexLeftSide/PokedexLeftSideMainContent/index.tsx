//react-router-dom
import { HashRouter, Route, Routes} from 'react-router-dom';
//components
import { PokemonsList } from '../../../pages/PokemonsList';
import { PokemonCard } from '../../../pages/PokemonCard';
import { PokeHome } from '../../../pages/PokeHome';
//contexts
import { LedAnimationProvider } from '../../../contexts/LedAnimation';
//style
import "./index.css";

export const PokedexRightSideMainContent = () =>{
  return(
    <div className="pokedexMainContent">
      <div className="mainScreenContainer flex lightGray">
        <div className="mainScreenSLed flex">
          <div className="mainScreenLed circle red"></div>
          <div className="mainScreenLed circle red"></div>
        </div>
        <div className="mainScreen">
          <LedAnimationProvider>
            <HashRouter>
              <Routes>
                <Route path='/' element = {<PokeHome />}/>
                <Route path='/pokemons' element = {<PokemonsList/>}/>
                <Route path='/pokemons/:name' element = {<PokemonCard/>}/>    
              </Routes>    
            </HashRouter>  
          </LedAnimationProvider>               
        </div>
        <div className="mainScreenLedB circle red"></div>
        <div className="mainSoundBox"></div>
      </div>
    </div>
  );
}