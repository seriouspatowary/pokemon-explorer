import { PokemonCard } from "@/components/pokemonCard";
import { PokemonGrid } from "@/components/pokemonGrid";
import Image from "next/image";
import { getPokeList } from "@/server/pokeApi";

export default async function Home() {

  const pokemonList = await getPokeList();
  return (
    
      <PokemonGrid pokemonList={pokemonList} />  
  );
}
