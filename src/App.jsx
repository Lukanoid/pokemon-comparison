import { useState, useCallback, useMemo } from 'react';
import { getRandomPokemon } from './services/pokemonService';
import { getTypeData } from './services/typeService';
import { comparePokemonTypes } from './utils/battleLogic';
import PokemonCard from './components/PokemonCard';
import BattleResult from './components/BattleResult';
import LoadPokemonButton from './components/LoadPokemonButton';
import { getStrongestPokemon } from './utils/pokemonStats';
import StrongestPokemon from './components/StrongestPokemon';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [previousPokemon, setPreviousPokemon] = useState(null);
  const [pokemonHistory, setPokemonHistory] = useState([]);

  const [battleResult, setBattleResult] = useState(null);

  const [stats, setStats] = useState({
    typeMatches: 0,
    newWins: 0,
    previousWins: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPokemon = useCallback(async () => {
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
      setPokemonHistory(prev => [...prev, newPokemon])

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
  }, [currentPokemon, loading]);

  const strongestPokemon = useMemo(() => {
    return getStrongestPokemon(pokemonHistory);
  }, [pokemonHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-blue-50 to-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-center text-5xl font-extrabold tracking-wide text-yellow-400 drop-shadow-[2px_2px_0px_#1e3a8a]">
          Pokémon Comparison
        </h1>

        <p className="mb-8 text-center text-lg font-medium text-blue-900">
          Catch random Pokémon and see who wins the type battle!
        </p>

        <div className="mb-10 flex justify-center">
          <LoadPokemonButton
            onLoad={fetchPokemon}
            loading={loading}
          />
        </div>

        {error && (
          <p role="alert" className="mb-6 text-center font-semibold text-red-500">
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

        <div className="mt-8 grid grid-cols-1 gap-4 text-center md:grid-cols-3">
          <div className="rounded-3xl border-2 border-blue-200 bg-blue-100/80 p-5 shadow-md">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Type Matches
            </p>
            <p className="mt-2 text-4xl font-extrabold text-blue-900">
              {stats.typeMatches}
            </p>
          </div>

          <div className="rounded-3xl border-2 border-green-200 bg-green-100/80 p-5 shadow-md">
            <p className="text-sm font-bold uppercase tracking-wide text-green-700">
              New Wins
            </p>
            <p className="mt-2 text-4xl font-extrabold text-green-800">
              {stats.newWins}
            </p>
          </div>

          <div className="rounded-3xl border-2 border-orange-200 bg-orange-100/80 p-5 shadow-md">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
              Previous Wins
            </p>
            <p className="mt-2 text-4xl font-extrabold text-orange-800">
              {stats.previousWins}
            </p>
          </div>
        </div>

        <StrongestPokemon pokemon={strongestPokemon} />
      </div>
    </div>
  );
}

export default App;
