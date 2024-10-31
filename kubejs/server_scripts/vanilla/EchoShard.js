ServerEvents.recipes(e => {
    e.custom({
        type : "create:mixing",
        ingredients: [
            {
                item: 'minecraft:crying_obsidian'
            },
            {item: 'minecraft:amethyst_shard'},
            {item: 'minecraft:amethyst_shard'},
            {item: 'minecraft:amethyst_shard'}
        ],
        results: [
            {
                item: 'minecraft:echo_shard'
            }
        ],
        heatRequirement: "superheated"
    })
})