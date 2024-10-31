ServerEvents.recipes(event => {
    event.remove({id: 'icarus:feathered_wings'})
    event.shaped({
        result: {item: 'icarus:white_feathered_wings'},
        pattern: [
            'HHH',
            'FEF',
            'FTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:feather').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson()
        }
    })

    event.remove({id: 'icarus:light_wings'})
    event.shaped({
        result: {item: 'icarus:yellow_light_wings'},
        pattern: [
            'HHH',
            'FEF',
            'FTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:glowstone_dust').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson()
        }
    })

    event.remove({id: 'icarus:mechanical_leather_wings'})
    event.shaped({
        result: {item: 'icarus:orange_mechanical_leather_wings'},
        pattern: [
            'HHH',
            'IEI',
            'FTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:leather').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson(),
            I: Ingredient.of('minecraft:iron_ingot').toJson()
        }
    })

    event.remove({id: 'icarus:mechanical_feathered_wings'})
    event.shaped({
        result: {item: 'icarus:white_mechanical_feathered_wings'},
        pattern: [
            'HHH',
            'IEI',
            'FTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:feather').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson(),
            I: Ingredient.of('minecraft:iron_ingot').toJson()
        }
    })

    event.remove({id: 'icarus:dragon_wings'})
    event.shaped({
        result: {item: 'icarus:black_dragon_wings'},
        pattern: [
            'HHH',
            'FEF',
            'FTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:dragon_breath').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson()
        }
    })

    event.remove({id: 'icarus:zanzas_wings'})
    event.shaped({
        result: {item: 'icarus:zanzas_wings'},
        pattern: [
            'HHH',
            'IEI',
            'FTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:glowstone_dust').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson(),
            I: Ingredient.of('minecraft:nether_star').toJson()
        }
    })

    event.remove({id: 'icarus:discords_wings'})
    event.shaped({
        result: {item: 'icarus:discords_wings'},
        pattern: [
            'HHH',
            'IEI',
            'LTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:feather').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson(),
            I: Ingredient.of('minecraft:nether_star').toJson(),
            L: Ingredient.of('minecraft:leather').toJson()
        }
    })

    event.remove({id: 'icarus:flandres_wings'})
    event.shaped({
        result: {item: 'icarus:flandres_wings'},
        pattern: [
            'HHH',
            'IEI',
            'LTF'
        ],
        key: {
            H: Ingredient.of('minecraft:honeycomb').toJson(),
            T: Ingredient.of('ars_elemental:air_focus').toJson(),
            F: Ingredient.of('minecraft:emerald').toJson(),
            E: Ingredient.of('deeperdarker:soul_elytra').toJson(),
            I: Ingredient.of('minecraft:nether_star').toJson(),
            L: Ingredient.of('minecraft:diamond').toJson()
        }
    })
})