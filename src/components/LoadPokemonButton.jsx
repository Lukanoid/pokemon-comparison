import {memo} from 'react';

const LoadPokemonButton = memo(function LoadPokemonButton({
    onLoad,
    loading,
}){

    return (
        <button
        onClick={onLoad}
        disabled={loading}
        className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-500 disabled:opacity-50"
        >
            {loading ? 'Loading...' : 'Load Random Pokémon'} 
        </button>
    );
});

export default LoadPokemonButton;