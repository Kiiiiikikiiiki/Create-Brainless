ServerEvents.recipes(event => {
    event.remove({output: "minecraft:enchanting_table"})

    event.shaped({
        result: {item: "minecraft:enchanting_table"},
        pattern: [
            ' D ',
            'BCB',
            'OOO'
        ],
        key: {
            D: Ingredient.of("minecraft:diamond").toJson(),
            B: Ingredient.of("minecraft:book").toJson(),
            C: Ingredient.of("minecraft:crying_obsidian").toJson(),
            O: Ingredient.of("minecraft:obsidian").toJson()
        }
    })
})