import { Evolution } from '../evolution';
import './index.css';

export const PokeCardEvolution = (props: {pokemonEvolution: {
    evolutionName: string;
    evolutionImg: string;
}[], currentPoke: string}) => {
    return (
        <>
            <h2 className="pokeCardH2">EVOLUTION</h2>
            {props.pokemonEvolution.length === 1?
            <><h2>No Evolves</h2></>//Fazer componente NoEvolves
            : props.pokemonEvolution.map(pokemonEvolution => 
            {return <>
                <div className="evolutions"> 
                    <Evolution key={pokemonEvolution.evolutionName} 
                    evolution ={
                      {
                        name : pokemonEvolution.evolutionName, 
                        img: pokemonEvolution.evolutionImg
                      }
                    } 
                    currentPoke = {props.currentPoke}/>
                </div>
            </>})}
        </>
    );
}