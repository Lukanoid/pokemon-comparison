function PokemonCard({ pokemon, title }) {
    return (<div className="flex-1 rounded-xl border border-gray-300 bg-white p-6 text-center shadow-md">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
            {title}
        </h2>

        {!pokemon ? (
            <p className="text-gray-400">
                No Pokémon loaded yet
            </p>
        ) : (
            <div className="flex flex-col items-center gap-3">
                <h3 className="text-2xl font-semibold capitalize text-gray-900">
                    {pokemon.name}
                </h3>

                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="h-40 w-40 object-contain"
                />

                <p className="text-gray-700">
                    Height: {pokemon.height}
                </p>

                <p className="text-gray-700">
                    Weight: {pokemon.weight}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                    {pokemon.types.map(({ slot, type }) => (
                        <span
                            key={slot}
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800"
                        >
                            {type.name}
                        </span>
                    ))}
                </div>
            </div>
        )}
    </div>)
}

export default PokemonCard;