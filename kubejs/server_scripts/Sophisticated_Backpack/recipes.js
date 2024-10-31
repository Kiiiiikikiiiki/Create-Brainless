ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedbackpacks:copper_backpack'})
    event.remove({output: 'sophisticatedbackpacks:iron_backpack'})

    // Copper backpack
    event.shaped({
        result: {item: 'sophisticatedbackpacks:copper_backpack'},
        pattern: [
            'CDC',
            'DBD',
            'CDC'
        ],
        key: {
            B: Ingredient.of('sophisticatedbackpacks:backpack').toJson(),
            D: Ingredient.of('ad_astra:desh_ingot').toJson(),
            C: Ingredient.of('minecraft:copper_ingot').toJson()
        }
    })

        // Iron backpack
        event.shaped({
            result: {item: 'sophisticatedbackpacks:iron_backpack'},
            pattern: [
                'CDC',
                'DBD',
                'CDC'
            ],
            key: {
                B: Ingredient.of('sophisticatedbackpacks:backpack').toJson(),
                D: Ingredient.of('ad_astra:ostrum_ingot').toJson(),
                C: Ingredient.of('minecraft:iron_ingot').toJson()
            }
        })
})