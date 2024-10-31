ServerEvents.recipes(event => {
    event.remove({output: 'pneumaticcraft:reinforced_stone'})
    event.shaped({
        result: {item: 'pneumaticcraft:reinforced_stone'},
        pattern: [
            'MMM',
            'MRM',
            'MMM'
        ],
        key: {
            M: Ingredient.of('ad_astra:moon_stone').toJson(),
            R: Ingredient.of('pneumaticcraft:ingot_iron_compressed').toJson()
        }
    })
    event.shaped({
        result: {item: 'pneumaticcraft:reinforced_stone'},
        pattern: [
            'S',
            'S'
        ],
        key: {
            S: Ingredient.of('pneumaticcraft:reinforced_stone_slab').toJson()
        }
    })
})