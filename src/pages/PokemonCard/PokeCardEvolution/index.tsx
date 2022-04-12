import { Evolution } from '../evolution';
import './index.css';

export const PokeCardEvolution = (props: {pokemonEvolution: {
    evolutionName: string;
    evolutionImg: string;
}[], currentPoke: string}) => {
   
    const pokeEvolutionLength = props.pokemonEvolution.length;
    return (
        <>
            <h2 className="pokeCardH2">EVOLUTION</h2>
            {pokeEvolutionLength === 1?
            <><h2>No Evolves</h2></>//Fazer componente NoEvolves
            :<div className='evolutionsContent'>
                {
                props.pokemonEvolution.map(pokemonEvolution => {
                    console.log(pokemonEvolution.evolutionName)
                    return <> 
                        <Evolution 
                        evolution = {
                        {name : pokemonEvolution.evolutionName, 
                        img: pokemonEvolution.evolutionImg}} 
                        currentPoke = {props.currentPoke}/>
                    </>
                })
                }
            </div> 
            }
        </>
    );
}