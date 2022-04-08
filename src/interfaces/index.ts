export interface pokeList{
  results: [{name: string, url: string}]
}

export interface pokemon {
  height: number,
  id: number,
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
  ],
  weight: number
};

export interface pokemonPropertys {
  name:string, //| undefined
  img:string ,//
  types?:string[]
  color?:string,
  evolutions?:string[] 
}

export interface pokeSpecie{
  color: {
    name:string |undefined
  },
  evolution_chain: {
    url: string |undefined
  },
  habitat: {
    name: string,
    url: string
  },
  flavor_text_entries: [
    {
      flavor_text:string,
      language:{
        name:string
      },
      version:{
        name:string
      }
    }
  ]
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