import { Link } from "react-router-dom";

export const PokeHome = () =>{
    return(
        <div>
          <Link to={`/pokedex/pokemons`}>
            <h1>Home Temporario</h1>
          </Link>
        </div>
    );
}
