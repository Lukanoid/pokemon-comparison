
import { getTotalBaseStats } from '../utils/pokemonStats';

function StrongestPokemon({ pokemon }) {
    if (!pokemon) return null;

    return (
        <div className="mx-auto mt-8 w-full max-w-sm rounded-xl border border-yellow-400 bg-white p-6 text-center shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Strongest Pokémon So Far
            </h2>

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="mx-auto h-32 w-32 object-contain"
            />

            <h3 className="text-xl font-semibold capitalize text-gray-900">
                {pokemon.name}
            </h3>

            <p className="mt-2 text-gray-600">
                Total Base Stats:
                <span className="ml-2 font-bold text-yellow-600">
                    {getTotalBaseStats(pokemon)}
                </span>
            </p>
        </div>
    );
}

export default StrongestPokemon;
