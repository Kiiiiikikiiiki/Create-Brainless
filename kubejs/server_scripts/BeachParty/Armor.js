ServerEvents.recipes(e => {
    e.remove({output: 'beachparty:beach_hat'})
    e.shaped({
        result: {item: 'beachparty:beach_hat'},
        pattern: [
            ' W ',
            ' X ',
            'WCW'
        ],
        key: {
            W: Ingredient.of('minecraft:wheat').toJson(),
            X: Ingredient.of('minecraft:white_wool').toJson(),
            C: Ingredient.of('minecraft:conduit').toJson()
        }
    })

    e.remove({output: 'beachparty:swim_wings'})
    e.shaped({
        result: {item: 'beachparty:swim_wings'},
        pattern: [
            'KK ',
            'KC '
        ],
        key: {
            K: Ingredient.of('minecraft:dried_kelp').toJson(),
            C: Ingredient.of('minecraft:conduit').toJson()
        }
    })

    e.remove({output: 'beachparty:crocs'})
    e.shaped({
        result: {item: 'beachparty:crocs'},
        pattern: [
            'K  ',
            'KKC'
        ],
        key: {
            K: Ingredient.of('minecraft:dried_kelp').toJson(),
            C: Ingredient.of('minecraft:conduit').toJson()
        }
    })

    e.remove({output: 'beachparty:trunks'})
    e.shaped({
        result: {item: 'beachparty:trunks'},
        pattern: [
            'SCS',
            'K K',
            'K K'
        ],
        key: {
            S: Ingredient.of('minecraft:string').toJson(),
            C: Ingredient.of('minecraft:conduit').toJson(),
            K: Ingredient.of('minecraft:dried_kelp').toJson()
        }
    })

    e.remove({output: 'beachparty:bikini'})
    e.shaped({
        result: {item: 'beachparty:bikini'},
        pattern: [
            'KSK',
            'KCK'
        ],
        key: {
            S: Ingredient.of('minecraft:string').toJson(),
            C: Ingredient.of('minecraft:conduit').toJson(),
            K: Ingredient.of('minecraft:dried_kelp').toJson()
        }
    })

    e.remove({output: 'beachparty:sunglasses'})
    e.shaped({
        result: {item: 'beachparty:sunglasses'},
        pattern: [
            'SCS',
            'GSG'
        ],
        key: {
            S: Ingredient.of('minecraft:stick').toJson(),
            C: Ingredient.of('minecraft:conduit').toJson(),
            G: Ingredient.of('minecraft:black_stained_glass_pane').toJson()
        }
    })
})