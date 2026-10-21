
function BattleResult({ result }) {
  if (!result) return null;

  const resultColors = {
    'TYPE MATCH!': 'text-blue-600',
    'NEW POKÉMON WINS!': 'text-green-600',
    'PREVIOUS POKÉMON WINS!': 'text-orange-600',
    'NO ADVANTAGE': 'text-gray-600',
  };

  return (
    <div className="my-8 text-center">
      <h2 className={`text-2xl font-bold ${resultColors[result]}`}>
        {result}
      </h2>
    </div>
  );
}

export default BattleResult;
