import { getTotalBaseStats } from '../utils/pokemonStats';

function StrongestPokemon({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="mx-auto mt-10 w-full max-w-sm rounded-3xl border-4 border-yellow-300 bg-white/95 p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
      <h2 className="mb-4 text-2xl font-extrabold text-blue-900">
        Strongest Pokémon So Far
      </h2>

      <div className="mx-auto mb-4 w-fit rounded-full bg-gradient-to-br from-yellow-100 to-blue-100 p-4 shadow-inner">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto h-32 w-32 object-contain"
        />
      </div>

      <h3 className="text-3xl font-extrabold capitalize text-blue-950">
        {pokemon.name}
      </h3>

      <p className="mt-3 text-lg font-semibold text-blue-700">
        Total Base Stats:
        <span className="ml-2 font-extrabold text-yellow-500">
          {getTotalBaseStats(pokemon)}
        </span>
      </p>
    </div>
  );
}

export default StrongestPokemon;