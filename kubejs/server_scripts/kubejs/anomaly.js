ServerEvents.recipes(event => {
    // Unpressurized Anomaly
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'COCOC',
            'OBBBO',
            'CBFBC',
            'OBBBO',
            'COCOC'
        ],
        key: {
            C: Ingredient.of('minecraft:crying_obsidian').toJson(),
            O: Ingredient.of('minecraft:obsidian').toJson(),
            F: Ingredient.of('minecraft:fermented_spider_eye'),
            B: Ingredient.of('minecraft:blue_stained_glass')
        },
        result: {item: 'kubejs:unpressurize_anomaly'},
        acceptMirrored: false
    })
    // Anomaly
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {item: 'kubejs:unpressurize_anomaly'},
            {type:'pneumaticcraft:stacked_item', count: 2, item: 'minecraft:amethyst_shard'}
        ],
        pressure: 2.0,
        results: [
            {item: 'kubejs:create_anomaly'}
        ]
    }) 
})