import { Link } from "react-router-dom";
import "./index.css"
import pokeLogo from "../../assets/pokelogo.png";

export const PokeHome = () =>{
    return(
        <div className="pokeMenu">
          <img src={pokeLogo} alt="Pokemon" />
          <ul>
            <Link to={`/pokemons`}>
              <li>ALL POKEMONS</li>
            </Link>
          </ul>
        </div>
    );
}
