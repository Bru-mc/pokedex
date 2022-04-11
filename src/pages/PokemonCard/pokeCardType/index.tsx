import './index.css';

export const PokemonCardType = (props:{types:[{type:{name:string, url:string}}]}) =>{
  return(
    <div className="PokeProperty">
      <p className="pokeDescription">TYPE:</p>
      <div className="pokeTypes">
        {props.types.map<JSX.Element>((types, index) =>{
          if(index !== (props.types.length - 1)){
            return <p key={types.type.name} className="pokeDescription">
            {types.type.name!.toUpperCase()+'/'}
          </p>
          }
          return <p key={types.type.name} className="pokeDescription">
            {types.type.name!.toUpperCase()}
          </p>
        })}
      </div> 
    </div>
  )
}