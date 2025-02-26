import Image from "next/image"
import Link from "next/link"

interface pokemonCardProps{
    name:string
}

export function PokemonCard({name}:pokemonCardProps){

    return (
     
<Link
  href={`/pokemon/${name}`}
  className="group rounded-lg border border-gray-300 dark:border-gray-600 m-3 px-5 py-4 transition-colors hover:border-blue-500"
  key={name + 'Card'}
>
  <h2 className="mb-3 text-2xl font-semibold">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
</Link>

        
    )
}