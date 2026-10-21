
const BASE_URL = 'https://pokeapi.co/api/v2';

const typeCache = new Map();

export function getTypeData(typeName) {
  if (typeCache.has(typeName)) {
    return typeCache.get(typeName);
  }

  const request = fetch(`${BASE_URL}/type/${typeName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch type: ${typeName}`);
      }

      return response.json();
    })
    .catch(error => {
      typeCache.delete(typeName);
      throw error;
    });

  typeCache.set(typeName, request);

  return request;
}
