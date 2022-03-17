export interface pokemonPropertys {
  name:string | undefined,
  img:string | undefined,
  types:[
    {
      slot: number | undefined,
      type:{
        name:string | undefined,
        url:string | undefined
      }
    } | undefined
  ] | undefined
}