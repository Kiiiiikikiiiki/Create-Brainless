ServerEvents.recipes(e => {
    e.remove({output: 'blue_skies:star_emitter'})
    /*
    e.shaped({
        result: {item: 'blue_skies:star_emitter'},
        pattern: [
            ' F ',
            'MIM',
            'SSS'
        ],
        key: {
            F: Ingredient.of('blue_skies:star_flare').toJson(),
            M: Ingredient.of('alexsmobs:mimicream').toJson(),
            I: Ingredient.of('blue_skies:falsite_ingot').toJson(),
            S: Ingredient.of('#minecraft:wooden_slabs').toJson()
        }
    })
    */
})
