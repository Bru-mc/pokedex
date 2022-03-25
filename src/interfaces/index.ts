export interface pokeList{
  results: [{name: string, url: string}]
}

export interface pokemon {
  name: string,
  species:{
    url:string
  },
  sprites:{
    other:{
      dream_world:{
        front_default:string
      }
    }
  },
  types: [
    {
      type:{
        name:string,
        url:string
      }
    }
  ]
};

export interface pokemonPropertys {
  name:string | undefined,
  img:string | undefined,
  types:[
    {
      type:{
        name:string | undefined,
      }
    } | undefined
  ] | undefined
}

export interface pokeSpecie{
  color: {
    name:string |undefined;
  },
  evolution_chain: {
    url: string |undefined;
  }  
}
export interface pokeSpeciePropertys{
  color:string,
  url: string;  
}
export interface evolutionChain{
  evolves_to: evolutionChain[] 
  species:{
    name:string | undefined,
    url:string | undefined,
  } 
}

export interface chain{
  chain:evolutionChain
}