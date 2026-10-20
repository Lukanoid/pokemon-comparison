const BASE_URL = 'https://pokeapi.co/api/v2';

const typeCache = new Map();

export async function getTypeData(typeName) {
    if(typeCache.has(typeName)){
        return typeCache.get(typeName);
    }

    const response = await fetch(`${BASE_URL}/type/${typeName}`);

    if(!response.ok){
        throw new Error(`Failed to fetch type: ${typeName}`)
    }

    const data = await response.json()
    
    typeCache.set(typeName, data)

    return data;
}