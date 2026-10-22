function BattleResult({ result }) {
  if (!result) return null;

  const resultStyles = {
    'TYPE MATCH!': 'bg-blue-100 text-blue-800 border-blue-300',
    'NEW POKÉMON WINS!': 'bg-green-100 text-green-700 border-green-300',
    'PREVIOUS POKÉMON WINS!': 'bg-orange-100 text-orange-700 border-orange-300',
    'NO ADVANTAGE': 'bg-gray-100 text-gray-700 border-gray-300',
  };

  return (
    <div className="my-8 flex justify-center">
      <div
        className={`rounded-full border-4 px-8 py-4 text-2xl font-extrabold shadow-md ${resultStyles[result]}`}
      >
        {result}
      </div>
    </div>
  );
}

export default BattleResult;