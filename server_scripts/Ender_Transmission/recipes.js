ServerEvents.recipes(event => {
    event.remove({id: 'createendertransmission:energy_transmitter'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'COSOC',
            'OEPEO',
            'CEYEC',
            'OEPEO',
            'COSOC'
        ],
        key: {
            O: Ingredient.of("minecraft:obsidian").toJson(),
            C: Ingredient.of("minecraft:crying_obsidian").toJson(),
            S: Ingredient.of("create:shaft").toJson(),
            P: Ingredient.of("create:precision_mechanism").toJson(),
            Y: Ingredient.of("minecraft:ender_eye").toJson(),
            E: Ingredient.of("minecraft:ender_pearl").toJson()
        },
        result: Item.of('createendertransmission:energy_transmitter').toJson(),
        acceptMirrored: false
    })
})