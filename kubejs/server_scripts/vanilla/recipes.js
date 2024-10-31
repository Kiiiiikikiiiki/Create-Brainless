ServerEvents.recipes(event => {

    // Netherite 
    event.remove({output: 'minecraft:netherite_ingot'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'minecraft:netherite_scrap'},
            {item: 'minecraft:netherite_scrap'},
            {item: 'minecraft:netherite_scrap'},
            {item: 'minecraft:netherite_scrap'},
            {item: 'minecraft:gold_block'},
            {item: 'create:sturdy_sheet'},
            {item: 'create:sturdy_sheet'},
            {item: 'create:brass_sheet'},
            {item: 'create:brass_sheet'}
        ],
        results: [
            {
                item: 'minecraft:netherite_ingot'
            }
        ],
        heatRequirement: 'superheated'
    })

    // Leather
    event.custom({
        type: 'create:pressing',
        ingredients: [
            {item: 'farmersdelight:tree_bark'}
        ],
        results: [
            {item: 'minecraft:leather', chance: 0.1}
        ]
    })

    // Calcite to amethyst
    event.remove({id: 'create:milling/calcite'})
    event.custom({
        type: 'create:milling',
        ingredients: [
            {item: 'minecraft:calcite'}
        ],
        results: [
            {item: 'minecraft:bone_meal', chance: 0.75},
            {item: 'minecraft:amethyst_shard', chance: 0.05}
        ],
        processingTime: 250
    })

    // lapis lazuli
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {item: 'ae2:fluix_dust'},
            {item: 'botania:mana_powder'}
        ],
        results: [
            {item: 'minecraft:lapis_lazuli', count: 3},
        ],
        heatRequirement: "heated"
    })

    // quartz from soul sand
    event.remove({id: 'create:splashing/soul_sand'})
    event.custom({
        type: 'create:splashing',
        ingredients: [
            {item: 'minecraft:soul_sand'}
        ],
        results: [
            {item: 'minecraft:quartz', count: 2, chance: 0.12},
            {item: 'minecraft:gold_nugget', count: 1, chance: 0.02}
        ]
    })
})