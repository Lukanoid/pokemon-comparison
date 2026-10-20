export function comparePokemonTypes(
    previousType,
    currentType,
    previousTypeData,
    currentTypeData
) {
    if (previousType === currentType) {
        return 'TYPE MATCH!'
    }

    const currentStrongAgainst =
        currentTypeData.damage_relations.double_damage_to.some(type =>
            type.name === previousType
        );

    const previousStrongAgainst =
        previousTypeData.damage_relations.double_damage_to.some(type =>
            type.name === currentType
        )

    if(currentStrongAgainst && !previousStrongAgainst) {
        return 'NEW POKÉMON WINS!'
    }

    if(previousStrongAgainst && !currentStrongAgainst) {
        return 'PREVIOUS POKÉMON WINS!'
    }

    return 'NO ADVANTAGE'
}