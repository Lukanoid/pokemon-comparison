import { memo } from 'react';

const PokemonCard = memo(function PokemonCard({ pokemon, title }) {
  return (
    <div className="flex-1 rounded-3xl border-4 border-blue-200 bg-white/90 p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm transition hover:-translate-y-1">
      <h2 className="mb-6 text-2xl font-extrabold text-blue-900">
        {title}
      </h2>

      {!pokemon ? (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/70 p-6">
          <p className="text-lg font-medium text-blue-400">
            No Pokémon loaded yet
          </p>
          <p className="mt-2 text-sm text-blue-300">
            Click the button to catch one!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl font-extrabold capitalize text-blue-950">
            {pokemon.name}
          </h3>

          <div className="rounded-full bg-gradient-to-br from-yellow-100 to-blue-100 p-4 shadow-inner">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="h-40 w-40 object-contain"
            />
          </div>

          <div className="mt-2 grid w-full max-w-xs grid-cols-2 gap-3">
            <div className="rounded-2xl bg-yellow-50 p-3 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Height</p>
              <p className="text-lg font-bold text-blue-950">{pokemon.height}</p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-3 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Weight</p>
              <p className="text-lg font-bold text-blue-950">{pokemon.weight}</p>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {pokemon.types.map(({ slot, type }) => (
              <span
                key={slot}
                className="rounded-full border-2 border-blue-200 bg-blue-100 px-4 py-1 text-sm font-bold capitalize text-blue-800 shadow-sm"
              >
                {type.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default PokemonCard;