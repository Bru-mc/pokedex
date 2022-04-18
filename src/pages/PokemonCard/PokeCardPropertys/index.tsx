import { pokemonPropertys } from '../../../interfaces';
import './index.css';
export const PokemonCardProperty = (props:{pokemonPropertys:pokemonPropertys}) =>{
  return(
    <div className="PokeCardPropertys">
        {
        Object.keys(props.pokemonPropertys).map((key)=>{
            if(key !== "img" && key !== "name" && key !== "color"){ //condition for ignore img, name and color prop
                return <div key={key} className={"poke"+key.toUpperCase()+" PokeProperty"}>

                    <p className="pokeDescription">{key.toUpperCase()+":"}</p>
                    {
                        Array.isArray(props.pokemonPropertys[key])?//Is array? - so we are in type property turn
                        <div className="pokeTypes"> 
                            {
                                props.pokemonPropertys[key].map((element: any, index: number)=>{
                                    if(index !== (props.pokemonPropertys[key].length - 1)){ //isn't the last? 
                                                                                            //add a '/' at end
                                        return <p key={"type"+element.toUpperCase()} className="pokeDescription">
                                            {element.toUpperCase()+'/'}
                                        </p>
                                    } //if the last one, just return the element
                                    return <p key={"type"+element.toUpperCase()} className="pokeDescription">
                                        {element.toUpperCase()}
                                    </p>
                                })
                            } 
                        </div>://isn't array? - all others propertys enter here
                        <p className="pokeDescription">{props.pokemonPropertys[key].toUpperCase()}</p>
                    }
                </div>
            }  
            return <></>
        })
        }
    </div>
  );
}