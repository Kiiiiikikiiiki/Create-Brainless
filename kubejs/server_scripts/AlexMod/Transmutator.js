ServerEvents.recipes(e => {
    e.remove({output: 'alexsmobs:transmutation_table'})
    e.custom({
        type: "create:mechanical_crafting",
        pattern: [
            ' P ',
            'PNP',
            'F F',
            'GCG'
        ],
        key: {
            P: Ingredient.of('ad_astra:polished_permafrost').toJson(),
            N: Ingredient.of('minecraft:nether_star').toJson(),
            F: Ingredient.of('alexsmobs:farseer_arm').toJson(),
            G: Ingredient.of('deeperdarker:sculk_grime_bricks').toJson(),
            C: Ingredient.of('minecraft:crying_obsidian').toJson()
        },
        result: Item.of('alexsmobs:transmutation_table').toJson(),
        acceptMirrored: false
    })

    e.remove({id: 'alexscaves:raygun'})
})