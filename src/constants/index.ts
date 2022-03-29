export const apiUrl = 'https://pokeapi.co/api/v2';
export const pokeListApiUrl = apiUrl+"/pokemon?limit=150";
type hexColor = {
    [key:string]: string
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
    gray: '#686868'
}