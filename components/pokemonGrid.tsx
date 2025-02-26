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


   const filterPokemons = searchFilter(pokemonList)



return (
         <>
  <div className="flex flex-col items-center mt-20">
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label className="text-gray-400 dark:text-gray-300">Pokemon Name</label>
      <input
        type="text"
        value={searchText}
        autoComplete="off"
        id="pokemonName"
        placeholder="Charizard, Pikachu, etc."
        onChange={(e) => setSearchText(e.target.value)}
        className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-300 dark:text-white focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <h3 className="text-3xl mt-6 mb-8 text-center">Pokemon Collection</h3>

    <div className="mb-32 grid text-center  lg:mb-0 lg:grid-cols-3 lg:text-left">
     
        {
          filterPokemons.map((pokemon:any) => {
                 
            return (
                        <PokemonCard key={pokemon.name} name={pokemon.name} />

            )
                 
          })
        
        }

          

    </div>
  </div>
</>

 


    )
}
