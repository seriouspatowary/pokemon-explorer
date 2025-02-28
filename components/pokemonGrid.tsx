"use client";
import { useState } from "react";
import { PokemonCard } from "./pokemonCard";


interface pokemonGridProps {
  pokemonList:any
}


export function PokemonGrid({pokemonList}:pokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  const searchFilter = (pokemonList: any) => {
    
    return pokemonList.filter(
      (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
     )
  }



  console.log("pokemonList",pokemonList)
   const filterPokemons = searchFilter(pokemonList)


return (
     <div className="flex flex-col items-center mt-16 px-4">
      <div className="w-full max-w-md">
        <label className="text-gray-500 dark:text-gray-300 font-semibold mb-1 block">
          Search Pokemon Name
        </label>
        <input
          type="text"
          value={searchText}
          autoComplete="off"
          id="pokemonName"
          placeholder="Charmander, Pikachu, etc."
          onChange={(e) => setSearchText(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-300 dark:text-white focus:border-blue-500 focus:ring-blue-500"        />
      </div>

      <h3 className="text-4xl font-bold mt-10 mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        My Pokemon Collection
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-6xl">
        {filterPokemons.map((pokemon: any) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
 


    )
}
