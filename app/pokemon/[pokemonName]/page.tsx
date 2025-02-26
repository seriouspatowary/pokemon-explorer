import { getPokeDetails } from "@/server/pokeApi";
import { PokemonImage } from "@/components/pokemonImage";

export default async function getDetails({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = await params;
    const pokemonDetails = await getPokeDetails(pokemonName);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
           <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <div className="m-4" style={{ position: "relative", width: '300px', height: '300px'}}>
                <PokemonImage 
                    image={pokemonDetails.sprites.other['official-artwork'].front_default }
                    name={pokemonName}
                />
            </div>

            {/* Abilities & Types */}
            <div className="mt-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold">Abilities:</h3>
                <ul className="flex gap-4 mt-2">
                    {pokemonDetails.abilities.map((abilityObj: any) => (
                        <li key={abilityObj.ability.name} className="bg-gray-700 px-4 py-2 rounded-lg">
                            {abilityObj.ability.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold">Type:</h3>
                <ul className="flex gap-4 mt-2">
                    {pokemonDetails.types.map((typeObj: any) => (
                        <li key={typeObj.type.name} className="bg-gray-700 px-4 py-2 rounded-lg">
                            {typeObj.type.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Stats Section */}
            <div className="mt-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center">Stats</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {pokemonDetails.stats.map((statObject: any) => (
                        <div key={statObject.stat.name} className="bg-gray-800 px-4 py-2 rounded-lg text-center">
                            <span className="capitalize font-semibold">{statObject.stat.name}</span>: {statObject.base_stat}
                        </div>
                    ))}
                </div>
            </div>

            {/* Moves Section */}
            <div className="mt-8 w-full max-w-2xl">
                <h3 className="text-2xl font-semibold text-center">Moves:</h3>
                <ul className="flex flex-wrap justify-center gap-3 mt-4">
                    {pokemonDetails.moves.slice(0, 10).map((moveObj: any) => (
                        <li key={moveObj.move.name} className="bg-gray-700 px-4 py-2 rounded-full">
                            {moveObj.move.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
