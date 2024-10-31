ServerEvents.recipes(event => {
    event.remove({id: 'createchunkloading:mechanical_crafting/chunk_loader'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            ' M ',
            'MBM',
            ' M '
        ],
        key: {
            M: Ingredient.of("ad_astra:mercury_stone").toJson(),
            B: Ingredient.of("minecraft:beacon").toJson()
        },
        result: Item.of('createchunkloading:chunk_loader').toJson(),
        acceptMirrored: false
    })
})