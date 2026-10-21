import { useState } from 'react';
import { getRandomPokemon } from './services/pokemonService';
import { getTypeData } from './services/typeService';
import { comparePokemonTypes } from './utils/battleLogic';
import PokemonCard from './components/PokemonCard';
import BattleResult from './components/BattleResult';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [previousPokemon, setPreviousPokemon] = useState(null);

  const [battleResult, setBattleResult] = useState(null);

  const [stats, setStats] = useState({
    typeMatches: 0,
    newWins: 0,
    previousWins: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchPokemon() {
    if (loading) return;

    setLoading(true);
    setError('');

    try {
      const newPokemon = await getRandomPokemon();

      let result = null;

      if (currentPokemon) {
        const previousType = currentPokemon.types[0].type.name;
        const newType = newPokemon.types[0].type.name;

        const [previousTypeData, newTypeData] = await Promise.all([
          getTypeData(previousType),
          getTypeData(newType),
        ]);

        result = comparePokemonTypes(
          previousType,
          newType,
          previousTypeData,
          newTypeData
        );
      }

      setPreviousPokemon(currentPokemon);
      setCurrentPokemon(newPokemon);
      setBattleResult(result);

      if (result) {
        setStats(prevStats => ({
          typeMatches:
            prevStats.typeMatches + (result === 'TYPE MATCH!' ? 1 : 0),

          newWins:
            prevStats.newWins + (result === 'NEW POKÉMON WINS!' ? 1 : 0),

          previousWins:
            prevStats.previousWins +
            (result === 'PREVIOUS POKÉMON WINS!' ? 1 : 0),
        }));
      }
    } catch (err) {
      setError(err.message);
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

      <BattleResult result={battleResult} />

      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-blue-100 p-4">
          <p className="text-sm text-blue-800">Type Matches</p>
          <p className="text-3xl font-bold text-blue-900">
            {stats.typeMatches}
          </p>
        </div>

        <div className="rounded-lg bg-green-100 p-4">
          <p className="text-sm text-green-800">New Wins</p>
          <p className="text-3xl font-bold text-green-900">
            {stats.newWins}
          </p>
        </div>

        <div className="rounded-lg bg-orange-100 p-4">
          <p className="text-sm text-orange-800">Previous Wins</p>
          <p className="text-3xl font-bold text-orange-900">
            {stats.previousWins}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
