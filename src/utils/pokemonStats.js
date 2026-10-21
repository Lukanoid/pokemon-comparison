export function getTotalBaseStats(pokemon) {
    return pokemon.stats.reduce(
        (total, stat) => total + stat.base_stat, 
        0
    );
}

export function getStrongestPokemon(pokemons) {
    if(pokemons.length === 0) return null;

    return pokemons.reduce((strongest, pokemon) => {
        const total = getTotalBaseStats(pokemon);

        if(!strongest || total > getTotalBaseStats(strongest)) {
            return pokemon;
        }

        return strongest;
    }, null)
}