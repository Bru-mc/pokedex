export const apiUrl = 'https://pokeapi.co/api/v2';
export const pokeListApiUrl = apiUrl+"/pokemon?limit=150";
type hexColor = {
    [key:string]: string
}
type gradient = {
    [key:string]: string[]
}
export const hexColors:hexColor = {
    green: '#86D41C',
    yellow: '#f0cd06',
    red: '#C91C05',
    blue: '#124bc7',
    white: '#ffffff',
    purple: '#A21FC4',
    brown: '#812c0a',
    pink: '#f71e9c',
    gray: '#7F9192',
    black: '#2d2f32'
}

export const gradient:gradient = {
    green: ['#0D4C18','#86D41C'],
    yellow: ['#BD9605','#f0cd06'],
    red: ['#830707','#C91C05'],
    blue: ['#010C64','#124bc7'],
    white: ['#C9D6D3','#ffffff'],
    purple: ['#2C024D','#A21FC4'],
    brown: ['#422204','#812c0a'],
    pink: ['#9E0843','#f71e9c'],
    gray: ['#475B5B','#7F9192'],
    black: ['#2d2f32','#323538']
    //falta adicionar gray
}