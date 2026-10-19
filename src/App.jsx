import { useState } from 'react';
import {
  getRandomPokemon,
} from './services/pokemonService.js';
import PokemonCard from './components/PokemonCard.jsx';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [previousPokemon, setPreviousPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchPokemon() {
    if (loading) return;

    setLoading(true);
    setError('');

    try {

      const data = await getRandomPokemon()

      setPreviousPokemon(currentPokemon);
      setCurrentPokemon(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }



  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-yellow-400">
        Pokémon Comparison
      </h1>

      <div className="mb-8 flex justify-center">
        <button
          onClick={fetchPokemon}
          disabled={loading}
          className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-yellow-500 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Load Random Pokémon'}
        </button>
      </div>

      {error && (
        <p role="alert" className="mb-6 text-center text-red-500">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-6 md:flex-row">
        <PokemonCard
          title="Previous Pokémon"
          pokemon={previousPokemon}
        />

        <PokemonCard
          title="Current Pokémon"
          pokemon={currentPokemon}
        />
      </div>
    </div>
  );

}

export default App;
