ServerEvents.recipes(event => {
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            ' CC CC ',
            'CPECEPC',
            ' CPGPC ',
            '  CEC  ',
            '   C   '
        ],
        key: {
            C: Ingredient.of('minecraft:crying_obsidian').toJson(),
            P: Ingredient.of('minecraft:prismarine_shard').toJson(),
            E: Ingredient.of('minecraft:echo_shard').toJson(),
            G: Ingredient.of('minecraft:enchanted_golden_apple').toJson()
        },
        result: Item.of('deeperdarker:heart_of_the_deep').toJson(),
        acceptMirrored: false
    })
})