const NEXT_API_BASE_URL = "https://pokeapi.co/api/v2/";

//include private api url in env

export async function getPokeList() {
      
    const response = await fetch(NEXT_API_BASE_URL + "pokemon?limit=40&offset=0");
    const data = await response.json();
    return data.results;
}
export async function getPokeDetails(name:string) {
      
    const response = await fetch(NEXT_API_BASE_URL + "pokemon/" + name);
    const data = await response.json();
    return data;
}