ServerEvents.recipes(event => {
    event.remove({output: 'ad_astra:nasa_workbench'}),
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            'STLTS',
            'SSCSS',
            ' RBR '
        ],
        key: {
            S: Ingredient.of('#forge:plates/steel').toJson(),
            T: Item.of('create_things_and_misc:neon_tube').toJson(),
            L: Ingredient.of('create:analog_lever').toJson(),
            C: Ingredient.of('minecraft:crafting_table').toJson(),
            R: Ingredient.of('minecraft:redstone_block').toJson(),
            B: Ingredient.of('#forge:storage_blocks/steel').toJson()
        },
        result: Item.of('ad_astra:nasa_workbench').toJson(),
        acceptMirrored: false
    })
})