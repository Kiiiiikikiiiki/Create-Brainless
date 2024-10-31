ServerEvents.recipes(event => {
    event.remove({output: 'explorerscompass:explorerscompass'})

    event.shaped({
        result: {item: 'explorerscompass:explorerscompass'},
        pattern: [
            'SBS',
            'BCB',
            'SBS'
        ],
        key: {
            B: Ingredient.of("minecraft:cracked_nether_bricks").toJson(),
            S: Ingredient.of('botania:mana_string').toJson(),
            C: Ingredient.of('minecraft:recovery_compass').toJson()
        }
    })
})