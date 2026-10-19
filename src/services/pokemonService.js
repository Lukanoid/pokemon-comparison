
const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getRandomPokemon() {
  const response = await fetch(`${BASE_URL}/pokemon/${getRandomPokemonId()}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${response.status}`);
  }

  return await response.json();
}

function getRandomPokemonId() {
  return Math.floor(Math.random() * 151) + 1;
}
