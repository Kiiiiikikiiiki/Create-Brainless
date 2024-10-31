ServerEvents.recipes(event => {
    event.remove({id: 'create_jetpack:jetpack'})
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' OAO ',
            'OPBPO',
            'OCWCO',
            ' C C '
        ],
        key: {
            B: Ingredient.of('create:copper_backtank').toJson(),
            A: Ingredient.of('create:shaft').toJson(),
            P: Ingredient.of('create:precision_mechanism').toJson(),
            C: Ingredient.of('create:smart_chute').toJson(),
            O: Ingredient.of('ad_astra:ostrum_plate').toJson(),
            W: Ingredient.of('icarus:white_mechanical_feathered_wings').toJson()
        },
        result: Item.of('create_jetpack:jetpack').toJson(),
        acceptMirrored: false
    })
})