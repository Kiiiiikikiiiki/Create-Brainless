ServerEvents.recipes(event => {
    event.remove({output: 'ad_astra:launch_pad'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'SISIS',
            'ISISI',
            'IIPII',
            'ISISI',
            'SISIS'
        ],
        key: {
            I: Ingredient.of('#forge:plates/iron').toJson(),
            S: Ingredient.of('#forge:plates/steel').toJson(),
            P: Ingredient.of('minecraft:stone_pressure_plate').toJson()
        },
        result: Item.of('ad_astra:launch_pad').toJson(),
        acceptMirrored: false
    })
})