import { memo } from 'react';

const LoadPokemonButton = memo(function LoadPokemonButton({
    onLoad,
    loading,
}) {

    return (
        <button
            onClick={onLoad}
            disabled={loading}
            className="rounded-full border-4 border-yellow-300 bg-yellow-400 px-8 py-3 text-lg 
            font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300 
            active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
            {loading ? 'Loading...' : 'Load Random Pokémon'}
        </button>
    );
});

export default LoadPokemonButton;