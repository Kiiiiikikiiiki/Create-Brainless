ServerEvents.recipes(event => {
    event.remove({output: 'createsifter:zinc_mesh'})
    event.shaped({
        result: {item: 'createsifter:zinc_mesh'},
        pattern: [
            'SZS',
            'ZDZ',
            'SZS'
        ],
        key: {
            Z: Ingredient.of('create:zinc_ingot').toJson(),
            S: Ingredient.of('minecraft:stick').toJson(),
            D: Ingredient.of('ad_astra:desh_ingot').toJson()
        }
    })

    event.remove({output: 'createsifter:brass_mesh'})
    event.shaped({
        result: {item: 'createsifter:brass_mesh'},
        pattern: [
            'SAS',
            'AOA',
            'SAS'
        ],
        key: {
            S: Ingredient.of('minecraft:stick').toJson(),
            A: Ingredient.of('create:brass_ingot').toJson(),
            O: Ingredient.of('ad_astra:ostrum_ingot').toJson()
        }
    })

    event.remove({output: 'createsifter:advanced_brass_mesh'})
    event.shaped({
        result: {item: 'createsifter:advanced_brass_mesh'},
        pattern: [
            ' A ',
            'AMA',
            ' A '
        ],
        key: {
            M: Ingredient.of('createsifter:brass_mesh').toJson(),
            A: Ingredient.of('createcasing:chorium_ingot').toJson(),
        }
    })
})