import './index.css';

export const PokemonCardType = (props:{types:[{type:{name:string, url:string}}]}) =>{
  return(
    <div className="pokeCardType">
      <h2 className="pokeCardH2">TYPE :</h2>
      <div className="typeOp">
        {props.types.map<JSX.Element>(types =>{
          return <p key={types.type.name}>
            {types.type.name!.toUpperCase()}
          </p>
        })}
      </div> 
    </div>
  )
}